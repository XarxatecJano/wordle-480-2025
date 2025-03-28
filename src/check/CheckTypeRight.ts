import { MAX_WORD_SIZE, RIGHT } from "../env.js";
import { ICheckType } from "../interfaces/ICheckType.js";
import { CheckType } from "./CheckType.js";

export class CheckTypeRight extends CheckType implements ICheckType{
    
    check( wordCheck: number[] ): number[] {
        
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.wordManager.sameLetter(i)){ 
                wordCheck[i] = RIGHT }
        }

        return wordCheck
    }
}