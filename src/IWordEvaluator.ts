export interface IWordEvaluator {
    checkRightLetters(userWord: string, targetWord: string): number[];
    checkMisplacedLetters(userWord: string, targetWord: string): number[];
    checkWrongLetters(userWord: string, targetWord: string): number[];
}