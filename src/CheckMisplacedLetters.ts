import { ICheck } from "./ICheck";
import { Interface } from "./Interface";
import { MAX_WORD_SIZE } from "./env.js";


export class CheckMisplacedLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }

    check = (actualWord:string, pickedWord:string, turn:number ):void=> {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidences: number = 0;
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidences = (pickedWord.match(pattern)||[]).length;
            if (pickedWord[i]==actualWord[i]) isMisplacedLetter=false;
            for(let i = 0; i < numberOfCoincidences; i++){
                if(isMisplacedLetter){
                    this._interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                    this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
                } 
            }
        }             
    }



}