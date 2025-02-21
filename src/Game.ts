import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import {Interface} from "./Interface.js";
import {Word} from "./Word.js";
import {Letter} from "Letter.js";


export class Game {
    private _pickedWord: Word
    private _actualWord: Word
    private _turn: number
    private _interface: Interface
    constructor(pickedWord: Word){
        this._pickedWord = pickedWord;
        this._actualWord = new Word([]);
        this._turn = 1;
        this._interface = new Interface();
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
        return this.actualWord.getPosition();
    }
    /*set actualPosition(num){
        this._actualPosition = num;
    }*/

    get interface() {
        return this._interface;
    }
    set interface(i) {
        this._interface = i;
    }

    newLetter(code: string):void{
        let letter: Letter = new Letter(code);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter.getChar());
        this._actualWord.addLetter(letter);
    }

    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this._pickedWord.getLetterAtIndex(i)==this._actualWord.getLetterAtIndex(i)){
                this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = ():void=> {
        let actualLetter: Letter;
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = this._actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(),"g");
            numberOfCoincidencesPickedWord = this._pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = this._actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences==1){
                for (let j=0; j<MAX_WORD_SIZE; j++){
                    if(this._pickedWord.getLetterAtIndex(j)==actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences==0 && this._pickedWord.getLetterAtIndex(i)==this._actualWord.getLetterAtIndex(i)){
                isMisplacedLetter=false;
            }
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
            
        }
    }

    checkWrongLetters = ():void=>{
        let actualLetter: Letter;
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this._actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(),"g");
            numberOfCoincidencesPickedWord = this._pickedWord.numberOfCoincidences(pattern);
            if (numberOfCoincidencesPickedWord==0) this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this._turn = this._turn + 1;
        this._actualWord = new Word([]);
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    enterPressed():void{
        if (this._actualWord.getWordString().length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed():void{
        if (this.actualPosition > 0) {
            this._actualWord.removeLastLetter();
            this._interface.deleteLetter(this._turn, this.actualPosition);
        }
    }

    newKeyPressed(code: string):void{ 
        const letter = new Letter(code);
        if (letter.isValidLetter(this.actualPosition)) this.newLetter(code);
        if (letter.isEnterKey()) this.enterPressed();
        if (letter.isBackspaceKey()) this.backspacePressed();
        this._interface.changeBackgroundKey(code);
    }

    
}