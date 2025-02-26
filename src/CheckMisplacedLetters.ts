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
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = actualWord[i];
            if (pickedWord[i]==actualWord[i]) isMisplacedLetter=false;
            if(isMisplacedLetter) this.changeColorDependingOnCoincidences(turn, i, actualWord, actualLetter, pickedWord);      
        }             
    }


    changeColorDependingOnCoincidences(turn:number, actualPosition:number, actualWord:string, actualLetter:string,pickedWord:string):void{
        let numberOfCoincidences = this.getNumberOfCoincidences(pickedWord, actualLetter);
        let numberOfCoincidencesActualWord = this.getNumberOfCoincidences(actualWord, actualLetter);
        numberOfCoincidencesActualWord -= numberOfCoincidences;
        
        let j = 0
        for(j; j < numberOfCoincidences; j ++){
            this._interface.changeBackgroundPosition(turn, actualPosition, "misplacedLetter");
            this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
        
        }

        for(j; j < numberOfCoincidencesActualWord; j++){
            this._interface.changeBackgroundPosition(turn, actualPosition, "wrongLetter");
        }
    }

    getNumberOfCoincidences(word:string, actualLetter:string){
        let pattern = new RegExp(actualLetter,"g");
        return (word.match(pattern)||[]).length;
    }

}