import { MAX_ATTEMPTS } from "./env.js";


export class EndGame {
    private _pickedWord: string;
    private _wordTry: string;
    private _turn: number;
    constructor(wordTry: string, pickedWord: string, turn: number) {
        this._wordTry = wordTry;
        this._pickedWord = pickedWord;
        this._turn = turn;
    }

    checkIfLost():void {
        if ( this._turn == MAX_ATTEMPTS && this._pickedWord != this._wordTry ) {
            location.assign("/loser");
        }
    }

    checkIfWon():void {
        if (this._wordTry == this._pickedWord) {
            location.assign("/winner");
        }
    }

    endGameScreen() {
        this.checkIfWon();
        this.checkIfLost();
    }

}