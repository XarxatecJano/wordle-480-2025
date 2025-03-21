export interface IWorldValidator {
    isComplete(word: string): boolean;
    isCorrect(userWord: string, targetWorld: string): boolean;
}