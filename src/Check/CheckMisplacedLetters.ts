import { Game } from "../Game";
import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";


export class CheckMisplacedLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }

    check = (game:Game ):void=> {
        let actualLetter: string = "";
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = game.actualWord[i];
            this.changeColorDependingOnCoincidences(i, actualLetter, game); 
        }
    }


    changeColorDependingOnCoincidences(actualPosition:number,actualLetter:string, game: Game):void{
        let numberOfCoincidences = this.getNumberOfCoincidences(game.pickedWord,actualLetter);
        console.log(game.rightPositionLetters.get(actualLetter) );
        console.log(game.misplacedPositionLetters.get(actualLetter) );

        if((game.rightPositionLetters.get(actualLetter) ?? 0)  + (game.misplacedPositionLetters.get(actualLetter) ?? 0) <= numberOfCoincidences ){
            for(let i = 0; i < numberOfCoincidences;i++){
                this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
                game.misplacedPositionLetters.set(game.actualWord[i], (game.misplacedPositionLetters.get(actualLetter)?? 0) + 1);
                game.typeCell.set(actualPosition, "misplacedLetter");
            }
        }else{
            if(!game.typeCell.get(actualPosition)){
                game.typeCell.set(actualPosition, "wrongLetter");
            }
        }
    }

    getNumberOfCoincidences(word:string, actualLetter:string){
        let pattern = new RegExp(actualLetter,"g");
        return (word.match(pattern)||[]).length;
    }

}