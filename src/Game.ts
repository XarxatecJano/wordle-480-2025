import {MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import {Interface} from "./Interface.js";
import { Letter } from "./Letter.js";
import {Checker} from "./Checker.js";
//import { Updater } from "./Updater.js";

export class Game {
    private _validLetterCodes: Letter
    private _checker: Checker
    private _interface: Interface
    constructor(pickedWord: string){

        this._checker = new Checker(pickedWord);
        this._validLetterCodes = new Letter();
        this._interface = new Interface();

    }
    
    get checker(){
        return this._checker;
    }
    set checker(checker){
        this._checker = checker;
    }   
    
    
   
    
    isEnterKey(code: string):boolean {
        return code=="Enter";
    }

    isBackspaceKey(code: string):boolean{
        return code=="Backspace";
    }


    newLetter(code: string):void{
        let letter: string = this._validLetterCodes.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.actualPosition, letter);
        this.checker.aumentarPosicion();

        this.checker.actualWord += letter;
    }
    enterPressed():void{
        if (this.checker.actualWord.length == MAX_WORD_SIZE){
            this.checker.checkWordIsRight();
            this.checker.checkGameIsOver();
            this.checker.updateAfterANewWord();
        }
    }

    backspacePressed():void{
        if (this.checker.actualPosition > 0) {
            this.checker.actualPosition -= 1;
            this._interface.resetBackgroundKeys(this.checker.actualWord, this.checker.actualLetters);
            this.checker.actualWord=this.checker.actualWord.slice(0, this.checker.actualWord.length-1);
            this._interface.deleteLetter(this.checker.turn, this.checker.actualPosition);
        }
    }

    newKeyPressed(code: string):void{ 
        if (this._checker.isValidLetter(code) && this.checker.actualPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
            this._interface.changeBackgroundKey(code);
        }
//        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        //if (this.checker.actualPosition <= MAX_WORD_SIZE) this._interface.changeBackgroundKey(code);
    }

    
}
