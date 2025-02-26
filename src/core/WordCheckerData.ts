
export class WordState{
    letterCount: Record<string, number>;
    markedPositions: Record<number, boolean>;
    actualWord: string;
    pickedWord: string;
    turn: number;

    constructor(actualWord: string, pickedWord: string, turn: number) {
        
        this.actualWord = actualWord;
        this.pickedWord = pickedWord;
        this.turn = turn;
        this.letterCount = {};
        this.markedPositions = {};

        for (let letter of pickedWord) {
            this.letterCount[letter] = (this.letterCount[letter] || 0) + 1;
        }
    }
}
