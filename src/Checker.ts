import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Letter } from "./Letter.js";
import { Interface } from "./Interface.js";
import { IGameChecker } from "./IGameChecker.js";

export class Checker implements IGameChecker {
    private static _instance: Checker;
    _INITIAL_TURN = 1;
    _INITIAL_POSITION = 0;
    private _pickedWord: string
    private _letterManager: Letter
    private _actualWord = "";
    private _turn = this._INITIAL_TURN;
    private _currentPosition = this._INITIAL_POSITION;
    private _interface: Interface
    constructor(pickedWord: string) {
    
        this._letterManager = Letter.getInstance();
        this._pickedWord = pickedWord;
        this._interface = new Interface();
    }
    get pickedWord() {
        return this._pickedWord;
    }
    set pickedWord(word) {
        this._pickedWord = word;
    }

    get actualWord() {
        return this._actualWord;
    }
    set actualWord(word) {
        this._actualWord = word;
    }

    get turn() {
        return this._turn;
    }
    set turn(num) {
        this._turn = num;
    }

    get currentPosition() {
        return this._currentPosition;
    }
    set currentPosition(num) {
        this._currentPosition = num;
    }

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }

    public static getInstance(pickedWord: string): Checker {
        if (!Checker._instance) {
            Checker._instance = new Checker(pickedWord);
        }
        return Checker._instance;
    }

    isValidLetter(code: string): boolean {
        return this._letterManager.includes(code) && this.currentPosition < MAX_WORD_SIZE;
    }

    checkWordIsRight(): void {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    }

    checkRightLetters(): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this._pickedWord[i] == this._actualWord[i]) {
                this._interface.changeCheckedBackground(this._turn,
                     i, "rightLetter", this._actualWord[i]);

            }
        }
    }
    checkMisplacedLetters(): void {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidences: number = 0;
        let isMisplacedLetter: boolean;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (this._pickedWord[i] == this._actualWord[i]) isMisplacedLetter = false;
            if (numberOfCoincidences > 0 && isMisplacedLetter) {
                this._interface.changeCheckedBackground(this._turn,
                     i, "misplacedLetter", this._actualWord[i]);
            }
        }
    }
    checkWrongLetters(): void {
        let actualLetter = "";
        let pattern: RegExp;
        let numberOfCoincidences = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences == 0) {
                this._interface.changeCheckedBackground(this._turn,
                     i, "wrongLetter", this._actualWord[i]);
            }
        }
    }

    checkGameIsOver(): void {
        if (this._turn == MAX_ATTEMPTS &&
            this._actualWord != this._pickedWord) {
            location.assign("/loser");
        }
    }
}