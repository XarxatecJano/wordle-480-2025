import { ICheck } from "./ICheck";
import { Interface } from "./Interface";
import { MAX_WORD_SIZE } from "./env.js";
export class CheckWrongLetters implements ICheck{
    _interface: Interface;
    constructor(interf:Interface){
        this._interface = interf;
    }

    check = (actualWord:string, pickedWord:string, turn:number ):void=>{
            let actualLetter = "";
            let pattern:RegExp;
            let numberOfCoincidences = 0;
            for (let i=0; i<MAX_WORD_SIZE; i++){
                actualLetter = actualWord[i];
                pattern = new RegExp(actualLetter,"g");
                numberOfCoincidences = (pickedWord.match(pattern)||[]).length;
                if (numberOfCoincidences==0) this._interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
}