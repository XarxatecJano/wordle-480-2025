export interface IWordValidator {
    isComplete(word: string): boolean;
    isCorrect(userWord: string, targetWorld: string): boolean;
}