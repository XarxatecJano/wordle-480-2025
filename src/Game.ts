
import { Interface } from "./Interface.js";
import { LetterValidator } from "./LetterValidator.js";
import { CheckRightLetters } from "./LetterCheckers/CheckRightLetters.js";
import { CheckWrongLetters } from "./LetterCheckers/CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./LetterCheckers/CheckMisplacedLetters.js";
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";


export class Game extends Interface {
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    constructor(pickedWord: string){
        super()
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;

    }

    get pickedWord(){
        return this._pickedWord;
    }
    set pickedWord(word){
        this._pickedWord = word;
    }

    get actualWord(){
        return this._actualWord;
    }
    set actualWord(word){
        this._actualWord = word;
    }

    get turn(){
        return this._turn;
    }
    set turn(num){
        this._turn = num;
    }

    get actualPosition(){
        return this._actualPosition;
    }
    set actualPosition(num){
        this._actualPosition = num;
    }

    newLetter(code: string):void{
        let letterValidator = new LetterValidator();
        let letter: string = letterValidator.transformCodeToLetter(code);
        this.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letter;
    }

    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }

    updateAfterANewWord = ():void=>{
        let checkLetters = [new CheckRightLetters(this), new CheckWrongLetters(this), new CheckMisplacedLetters(this)];
        checkLetters.forEach(checkLetters => checkLetters.check(this.actualWord, this.pickedWord, this.turn));
        this._turn = this._turn + 1;
        this._actualPosition = 0;
        this._actualWord = "";
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    enterPressed():void{
        if (this._actualWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed():void{
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this.deleteLetter(this._turn, this._actualPosition);
        }
    }

    newKeyPressed(code: string):void{ 
        let letterValidator = new LetterValidator();
        if (letterValidator.isValidLetter(code, this.actualPosition)) {
        this.newLetter(code);}

        if (letterValidator.isEnterKey(code)) this.enterPressed();
        if (letterValidator.isBackspaceKey(code)) this.backspacePressed();
        this.changeBackgroundKey(code);
    }

    
}