import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";
import { Game} from "../Game/Game.js";


export class CheckMisplacedLetters implements ICheck{
    _interface:Interface;

    constructor(interf:Interface){
        this._interface = interf;
    }

    check = (game: Game):void=> {
        let actualLetter: string = "";
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = game.gameLogic.actualWord[i];
            if(!game.gameLogic.typeCell.get(i)){
                this.changeColorDependingOnCoincidences(i, actualLetter, game); 
            }
        }
    }

    changeColorDependingOnCoincidences(actualPosition:number,actualLetter:string, game: Game):void{
        let numberOfCoincidences = this.getNumberOfCoincidences(game.gameLogic.pickedWord,actualLetter);
        let numberOfApparitions = (game.gameLogic.rightPositionLetters.get(actualLetter) ?? 0)  + (game.gameLogic.misplacedPositionLetters.get(actualLetter) ?? 0)
        if(numberOfApparitions < numberOfCoincidences ){
            this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
            game.gameLogic.misplacedPositionLetters.set(actualLetter, (game.gameLogic.misplacedPositionLetters.get(actualLetter)?? 0) + 1);
            game.gameLogic.typeCell.set(actualPosition, "misplacedLetter");
        }else{
            game.gameLogic.typeCell.set(actualPosition, "wrongLetter");
        }
    }

    getNumberOfCoincidences(word:string, actualLetter:string){
        let pattern = new RegExp(actualLetter,"g");
        return (word.match(pattern)||[]).length;
    }

}