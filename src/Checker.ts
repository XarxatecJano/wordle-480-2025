import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Interface } from "./Interface.js";
export class Checker {
    private _pickedWord: string
    private _actualLetters: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    private _interface: Interface
    constructor(pickedWord: string) {
        this._actualLetters = "";
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
        this._interface = new Interface();
    }
    get actualLetters() {
        return this._actualLetters;
    }
    set actualLetters(letters) {
        this._actualLetters = letters;
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

    get actualPosition() {
        return this._actualPosition;
    }
    set actualPosition(num) {
        this._actualPosition = num;
    }

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }

    checkWordIsRight(): void {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    }

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this._pickedWord[i] == this._actualWord[i]) {
                this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    }
    checkMisplacedLetters = (): void => {
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
            if (numberOfCoincidences > 0 && isMisplacedLetter) this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
        }
    }
    checkWrongLetters = (): void => {
        let actualLetter = "";
        let pattern: RegExp;
        let numberOfCoincidences = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences == 0) this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
        }
    }
    updateAfterANewWord = (): void => {
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.updateActualLetters();
        this._turn = this._turn + 1;
        this._actualPosition = 0;
        this._actualWord = "";
    }

    checkGameIsOver(): void {
        if (this._turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }

    aumentarPosicion(): void {
        this._actualPosition = this._actualPosition + 1;
        console.log(this._actualPosition);
    }
    updateActualLetters(): void {
        if(this._turn==1){
            this.actualLetters = this._actualWord;
        }else{
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (!this._actualLetters[i].includes(this._actualWord[i])) {
                this._actualLetters += this._actualWord[i];
            }
        }
        }
    }
}