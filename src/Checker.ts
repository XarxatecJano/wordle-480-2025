import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Letter } from "./Letter.js";
import { Interface } from "./Interface.js";
export class Checker {
    private _pickedWord: string
    private _validLetterCodes: Letter
    private _actualLetters: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    private _interface: Interface
    constructor(pickedWord: string) {
        this._validLetterCodes = new Letter();
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

    isValidLetter(code: string):boolean {
        return  this._validLetterCodes.includes(code) && this.actualPosition < MAX_WORD_SIZE;
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
    

    checkGameIsOver(): void {
        if (this._turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }


    updateAfterANewWord = (): void => {
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.updateActualLetters();
        this.turn = this.turn + 1;
        this.actualPosition = 0;
        this.actualWord = "";
    }
    aumentarPosicion(): void {
        this.actualPosition = this.actualPosition + 1;
        console.log(this.actualPosition);
    }
    updateActualLetters(): void {
        if(this.turn==1){
            this.actualLetters = this.actualWord;
        }else{
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (!this.actualLetters[i].includes(this.actualWord[i])) {
                this.actualLetters += this.actualWord[i];
            }
        }
        }
    }

   
}