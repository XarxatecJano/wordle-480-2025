import { Game } from "../Game";
import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";
export class CheckWrongLetters implements ICheck{
    _interface: Interface;
    constructor(interf:Interface){
        this._interface = interf;
    }

    check = (game: Game):void=>{
            let actualLetter = "";
            let pattern:RegExp;
            let numberOfCoincidences = 0;
            for (let i=0; i<MAX_WORD_SIZE; i++){
                actualLetter = game.actualWord[i];
                pattern = new RegExp(actualLetter,"g");
                numberOfCoincidences = (game.pickedWord.match(pattern)||[]).length;
                if (numberOfCoincidences==0){
                     this._interface.changeBackgroundKey(actualLetter, "wrongLetter");
                     game.typeCell.set(i, "wrongLetter")
                }
            }
        }
}