
export class WordState{
    letterCount: Map<string, number>;
    markedPositions: Map<number, boolean>;
    actualWord: string;
    pickedWord: string;
    turn: number;

    constructor(actualWord: string, pickedWord: string, turn: number) {
        
        this.actualWord = actualWord;
        this.pickedWord = pickedWord;
        this.turn = turn;
        this.letterCount = new Map<string, number>();
        this.markedPositions = new Map<number, boolean>();

    }

    letterCountMap (pickedWord:string){
        for (let letter of pickedWord) {
            let count = this.letterCount.get(letter) ?? 0
            this.letterCount.set(letter, count + 1);
        }
    }


}
