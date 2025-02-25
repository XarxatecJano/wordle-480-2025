
import { Interface } from "./Interface.js";
import { LetterCheckerFactory } from "./LetterCheckerFactory.js";
import { LetterValidatorFactory } from "./LetterValidatorFactory.js";
import { IKeyPressed } from "./SpecialKeyPressedStrategy/IKeyPressed.js";
import { EnterPressed } from "./SpecialKeyPressedStrategy/EnterPressed.js";
import { BackspacePressed } from "./SpecialKeyPressedStrategy/BackspacePressed.js";

const MAX_ATTEMPTS:number = 6;

export class Game extends Interface {
    private static instance: Game;
    private _pickedWord: string
    private _actualWord: string
    private _turn: number
    private _actualPosition: number
    private constructor(pickedWord: string){
        super()
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;

    }

    get pickedWord() { return this._pickedWord; }
    set pickedWord(word) { this._pickedWord = word; }

    get actualWord() { return this._actualWord; }
    set actualWord(word) { this._actualWord = word; }

    get turn() { return this._turn; }
    set turn(num) { this._turn = num; }

    get actualPosition() { return this._actualPosition; }
    set actualPosition(num) { this._actualPosition = num; }

    public static getInstance (pickedWord: string){
        if (!Game.instance){
            Game.instance = new Game(pickedWord);
        }
        return Game.instance;
    }
    
    private resetWordState(): void{
        this.turn = this.turn + 1;
        this.actualPosition = 0;
        this.actualWord = "";

    }

    newLetter(code: string):void{
        let letterValidator = LetterValidatorFactory.createValidator();
        let letter: string = letterValidator.transformCodeToLetter(code);
        this.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition += 1;
        this._actualWord += letter;
    }

    updateAfterANewWord = ():void=>{
        let letterCheckerFactory = LetterCheckerFactory.createCheckers(this);
        letterCheckerFactory.forEach(checkLetters => checkLetters.check(this.actualWord, this.pickedWord, this.turn));
        this.resetWordState();
    }

    checkWordIsRight():void{
        if (this._actualWord == this._pickedWord){
            location.assign("/winner");
        }
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    newKeyPressed(code: string):void{ 
        var specialKeyPressed!: IKeyPressed;
        let letterValidator = LetterValidatorFactory.createValidator();
            if (letterValidator.isValidLetter(code, this.actualPosition)) 
                {
                    this.newLetter(code);
                }

            if (letterValidator.isEnterKey(code)) {
                specialKeyPressed = new EnterPressed(this);
                specialKeyPressed.execute();
            }
            if (letterValidator.isBackspaceKey(code)) {
                specialKeyPressed = new BackspacePressed(this);
                specialKeyPressed.execute();
            }   
    }

    
}