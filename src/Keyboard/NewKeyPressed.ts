import { Game } from "../Game.js";
import { ValidateLetter } from "../ValidateLetter.js";
import { BackspacePressed } from "./BackspacePressed.js";
import { EnterPressed } from "./EnterPressed.js";
import { IKeyPressed } from "./IKeyPressed";

export class NewKeyPressed extends Game{
    private _specialKey!: IKeyPressed;

    constructor(pickedWord:string){
        super(pickedWord);
    
    }

    newLetter(letter:ValidateLetter):void{
        let letterValue: string = letter.transformCodeToLetter();
        this.setNewLetter(this.turn, this.actualPosition, letterValue);
        this.actualPosition = this.actualPosition + 1;
        this.actualWord += letterValue;
    }
    
    newKeyPressed(code: string):void{ 
        let letter:ValidateLetter = ValidateLetter.getInstance(code, this.actualPosition)
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