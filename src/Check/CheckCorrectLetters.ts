import { MAX_WORD_SIZE } from "../env.js";
import { ICheck } from "./ICheck";
import { Interface } from "../Interface.js";
import { Game } from "../Game/Game.js";


export class CheckCorrectLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }
    check = (game: Game):void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (game.gameLogic.pickedWord[i]==game.gameLogic.actualWord[i]){
                this._interface.changeBackgroundPosition(game.gameLogic.turn, i, "rightLetter");
                this._interface.changeBackgroundKey(game.gameLogic.pickedWord[i], "rightLetter");
                game.gameLogic.rightPositionLetters.set(game.gameLogic.actualWord[i], (game.gameLogic.rightPositionLetters.get(game.gameLogic.actualWord[i])?? 0) + 1);
                game.gameLogic.typeCell.set(i, "rightLetter");
            }
        }
    }
}
