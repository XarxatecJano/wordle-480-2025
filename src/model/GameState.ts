import { Word } from "./Word.js"

export class GameState {
    private _pickedWord: Word
    private _actualWord: Word
    private _turn: number

    constructor(pickedWord: Word) {
        this._pickedWord = pickedWord;
        this._actualWord = new Word([]);
        this._turn = 1;
    }

    nextTurn() {
        this._turn++;
    }

    get turn(): number {
        return this._turn;
    }

    get pickedWord(): Word {
        return this._pickedWord;
    }

    set actualWord(word: Word) {
        this._actualWord = word;
    }

    get actualWord(): Word {
        return this._actualWord;
    }
}