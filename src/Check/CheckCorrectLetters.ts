import { MAX_WORD_SIZE } from "../env.js";
import { Game } from "../Game.js";
import { ICheck } from "./ICheck";


export class CheckCorrectLetters extends Game implements ICheck{   
    constructor(pickedWord:string ){
      super(pickedWord);
    }
    check = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this._pickedWord[i]==Game._actualWord[i]){
                this.changeBackgroundPosition(Game._turn, i, "rightLetter");
                this.changeBackgroundKey(this._pickedWord[i], "rightLetter");
                Game._rightPositionLetters.set(Game._actualWord[i], (Game._rightPositionLetters.get(Game._actualWord[i])?? 0) + 1);
                Game._typeCell.set(i, "rightLetter");
            }
        }
    }

}
    
