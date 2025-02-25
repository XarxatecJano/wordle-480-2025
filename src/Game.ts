import { BackspacePressed } from "./BackspacePressed.js";
import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { CheckMisplacedLetters} from "./CheckMisplacedLetters.js";
import { CheckWrongLetters} from "./CheckWrongLetters.js";
import { EnterPressed } from "./EnterPressed.js";
import { ICheck } from "./ICheck.js";
import { IKeyPressed } from "./IKeyPressed.js";
import {Interface} from "./Interface.js";
import { ValidateLetter } from "./ValidateLetter.js";
export const MAX_ATTEMPTS:number = 6;

export class Game extends Interface {
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    private _specialKey!: IKeyPressed
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


    updateAfterANewWord = ():void=>{
        let strategies:ICheck[] = [
            new CheckCorrectLetters(this),
            new CheckMisplacedLetters(this),
            new CheckWrongLetters(this)
        ];
        strategies.forEach(strategy => strategy.check(this._actualWord, this._pickedWord, this._turn))
        this._turn += 1;
        this._actualPosition = 0;
        this._actualWord = "";

    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS && this._actualWord != this._pickedWord){
            location.assign("/loser");
        }
    }

    newKeyPressed(code: string):void{ 
        let letter:ValidateLetter = ValidateLetter.getInstance(code, this._actualPosition)
        if (letter.isValidLetter()){
            this.newLetter(letter);
        } 
        if (letter.isEnterKey()) {
            this._specialKey = new EnterPressed(this)
            this._specialKey.execute();
        }
        if (letter.isBackspaceKey()){
            this._specialKey = new BackspacePressed(this)
            this._specialKey.execute();
        } 
       
    }

}