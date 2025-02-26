import { Interface } from "./Interface.js";
import { Keyboard } from "./Keyboard.js";
import { WordTry } from "./WordTry.js";


export class Game {
    private _pickedWord: string;
    private _interface: Interface;
    private _actualWord: WordTry;
    private _keyboard: Keyboard;
    constructor(pickedWord: string) {
        this._pickedWord = pickedWord;
        this._interface = new Interface();
        const letterHistory: Set<string> = new Set();
        this._actualWord = new WordTry(pickedWord, 1, letterHistory, this._interface);
        this._keyboard = new Keyboard();
    }

    get pickedWord() {
        return this._pickedWord;
    }
    set pickedWord(word) {
        this._pickedWord = word;
    }

    get interface() {
        return this._interface;
    }
    set interface(interface0) {
        this._interface = interface0;
    }

    newKeyPressed(code: string):void {    
        if (this._keyboard.isValidLetter(code)) 
            this._actualWord.addLetterIfPossible(code); 

        if (this._keyboard.isEnterKey(code)) 
            this._actualWord.enterPressed();

        if (this._keyboard.isBackspaceKey(code)) 
            this._actualWord.deleteLetterIfPossible();
    }

}