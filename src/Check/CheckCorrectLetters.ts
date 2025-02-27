import { MAX_WORD_SIZE } from "../env.js";
import { Game } from "../Game.js";
import { ICheck } from "./ICheck";
import { Interface } from "../Interface.js";


export class CheckCorrectLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }
    check = (game: Game):void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (game.pickedWord[i]==game.actualWord[i]){
                this._interface.changeBackgroundPosition(game.turn, i, "rightLetter");
                this._interface.changeBackgroundKey(game.pickedWord[i], "rightLetter");
                game.rightPositionLetters.set(game.actualWord[i], (game.rightPositionLetters.get(game.actualWord[i])?? 1) + 1);
                game.typeCell.set(i, "rightLetter");
            }
        }
    }
}
