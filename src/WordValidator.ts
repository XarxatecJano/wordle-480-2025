import { IWordValidator } from "./IWordValidator.js";
import { MAX_WORD_SIZE } from "./env.js";

export class WordValidator implements IWordValidator {
    isComplete(word: string): boolean {
        console.log(`Verificando completitud: palabra="${word}", longitud=${word.length}, MAX_WORD_SIZE=${MAX_WORD_SIZE}`);
        return word.length === MAX_WORD_SIZE;
    }
    isCorrect(userWord: string, targetWord: string): boolean {
        return userWord === targetWord;
    }

}