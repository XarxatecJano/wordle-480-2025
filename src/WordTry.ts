import { Interface } from "./Interface.js";
import { MAX_WORD_SIZE } from "./env.js";
import { EndGame } from "./EndGame.js";
import { WordTryState } from "./WordTryState.js";
import { Key } from "./Key.js";

export class WordTry {
    private _wordTry: string;
    private _turn: number;
    //private _actualPosition: number;
    private _interface: Interface;
    private _letterHistory: Set<string>;
    private _pickedWord: string;
    private _key: Key;
    constructor(pickedWord: string, turn: number, letterHistory: Set<string>, interface0: Interface) {
        this._wordTry = "";
        this._pickedWord = pickedWord;
        this._turn = turn;
        //this._actualPosition = 0;
        this._interface = interface0;
        this._letterHistory = letterHistory;
        this._key = new Key();
    }
    
    get guessWord():string {
        return this._wordTry;
    }
    set guessWord(value: string) {
        this._wordTry = value;
    }

    get turn():number {
        return this._turn;
    }
    set turn(value: number) {
        this._turn = value;
    }

    get letterHistory():Set<string> {
        return this._letterHistory;
    }
    set letterHistory(value: Set<string>) {
        this._letterHistory = value;
    }

    getWord():string {
        return this._wordTry;
    }

    getTurn():number {
        return this._turn;
    }


    addLetterIfPossible(code: string):void {
        const actualPosition = this._wordTry.length;
        if (actualPosition < MAX_WORD_SIZE) {
            const letter: string = this._key.transformCodeToLetter(code);
            this._interface.setNewLetter(this.turn, actualPosition, letter);
            this._interface.changeBackgroundKey(code);
            //this._actualPosition += 1;
            this._wordTry += letter;
        }
    }

    deleteLetterIfPossible():void {
        const actualPosition = this._wordTry.length;
        if (actualPosition > 0) {
            const lastLetterPos = actualPosition - 1;
            this._interface.deleteLetter(this._turn, lastLetterPos);
            this._interface.resetLastLetterBGColor(this._wordTry, this._letterHistory);
            this._wordTry = this._wordTry.substring(0, this._wordTry.length - 1);
        }
    }

    enterPressed():void {
        const wordTry: string = this._wordTry;
        const turn: number = this._turn;
        const endGame: EndGame = new EndGame(wordTry, this._pickedWord, turn);
        if (wordTry.length == MAX_WORD_SIZE) {
            endGame.endGameScreen();
            this.updateAfterANewWord();
        }
    }

    updateLetterHistory():void {
        const wordTry: string = this._wordTry;
        for (var letter of wordTry) {
            this._letterHistory.add(letter);   
        }
    }

    updateAfterANewWord():void {
        const wordTryState: WordTryState = new WordTryState(this, this._pickedWord, this._interface);
        wordTryState.updateWordTryStates();
        this.updateLetterHistory()
        this._turn += 1;
        //this._actualPosition = 0;
        this._wordTry = "";
    }

}
