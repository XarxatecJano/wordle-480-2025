import { WRONG, MAX_WORD_SIZE } from "../env.js";
import { ICheckType } from "../interfaces/ICheckType.js";
import { CheckType } from "./CheckType.js";

export class CheckTypeWrong extends CheckType implements ICheckType{

    check( wordCheck: number[] ): number[] {
       
        for (let i=0; i<MAX_WORD_SIZE; i++){
            if(!this.wordManager.sameLetter(i) && this.wordManager.concidences(i) == 0 ){ 
                wordCheck[i] = WRONG 
            }
        }

        return wordCheck
    }
}