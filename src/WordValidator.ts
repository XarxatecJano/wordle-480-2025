import { IWordValidator } from "./IWordValidator";
import { MAX_WORD_SIZE } from "./env";

export class WordEvaluator implements IWordValidator {
    isComplete(word: string): boolean {
        return word.length === MAX_WORD_SIZE
    }
    isCorrect(userWord: string, targetWorld: string): boolean {
        return userWord === targetWorld;
    }

}