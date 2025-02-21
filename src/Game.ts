import {Interface} from "./Interface.js";
import { ValidateLetter } from "./ValidateLetter.js";
import {MAX_WORD_SIZE} from "./env.js";
export const MAX_ATTEMPTS:number = 6;

export class Game extends Interface {
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    constructor(pickedWord: string){
        super();
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


    newLetter(letter:ValidateLetter):void{
        let letterValue: string = letter.transformCodeToLetter();
        this.setNewLetter(this.turn, this.actualPosition, letterValue);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letterValue;
    }

    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }
    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this._pickedWord[i]==this._actualWord[i]){
                this.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    }

    
    checkMisplacedLetters = ():void=> {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidences: number = 0;
        let isMisplacedLetter: boolean;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidences = (this._pickedWord.match(pattern)||[]).length;
            if (this._pickedWord[i]==this._actualWord[i]) isMisplacedLetter=false;
            if (numberOfCoincidences>0 && isMisplacedLetter) this.changeBackgroundPosition(this._turn, i, "misplacedLetter");
            
        }
    }

    
    checkWrongLetters = ():void=>{
        let actualLetter = "";
        let pattern:RegExp;
        let numberOfCoincidences = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidences = (this._pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidences==0) this.changeBackgroundPosition(this._turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
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
        let letter:ValidateLetter = ValidateLetter.getInstance(code, this._actualPosition)
        if (letter.isValidLetter()) this.newLetter(letter);
        if (letter.isEnterKey()) this.enterPressed();
        if (letter.isBackspaceKey()) this.backspacePressed();
        this.changeBackgroundKey(code);
    }

    
}