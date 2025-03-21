export interface IWordEvaluator {
    checkRightLetters(useWrod: string, targetWord: string): number[];
    checkMisplacedLetters(useWord: string, targetWord: string): number[];
    checkWrongLetters(userWord: string, targetWord: string): number[];
}