import { MAX_WORD_SIZE } from "./env.js";
import { ICheck } from "./ICheck";
import { Interface } from "./Interface";


export class CheckCorrectLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }
    check = (actualWord:string, pickedWord:string, turn:number ):void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (pickedWord[i]==actualWord[i]){
                this._interface.changeBackgroundPosition(turn, i, "rightLetter");
                this._interface.changeBackgroundKey(pickedWord[i], "rightLetter");
            }
        }
    }
}
    
