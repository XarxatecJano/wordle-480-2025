import {MAX_WORD_SIZE} from "./env.js"
import { Interface } from "./Interface.js";
import { WordTry } from "./WordTry.js";

export class WordTryState {
    private _actualWord: WordTry;
    private _pickedWord: string;
    private _interface: Interface;
    constructor(actualWord: WordTry, pickedWord: string, interface0: Interface) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._interface = interface0;
    }

    get actualWord() {
        return this._actualWord;
    }
    set actualWord(word) {
        this._actualWord = word;
    }

    get pickedWord() {
        return this._pickedWord;
    }
    set pickedWord(value) {
        this._pickedWord = value;
    }

    get interface() {
        return this._interface;
    }
    set interface(value) {
        this._interface = value;
    }

    getLetterPositionState(index: number): string {
        const letter = this._actualWord.getWord()[index];
        if (this._pickedWord[index] == letter)
            return "rightLetter";

        const pattern = new RegExp(letter, "g");
        const numberOfCoincidences = (this._pickedWord.match(pattern) || []).length; 
        if (numberOfCoincidences == 0)
            return "wrongLetter";
        return "misplacedLetter"; 
    }

    updateWordTryStates():void {
        const turn = this._actualWord.getTurn();
        let letterState: string;
        for(let i = 0; i < MAX_WORD_SIZE; i++) {
            letterState = this.getLetterPositionState(i);
            this._interface.changeBackgroundPosition(turn, i, letterState);
        }
    }

}