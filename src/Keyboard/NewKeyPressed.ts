import { Game } from "../Game/Game.js";
import { ValidateLetter } from "../ValidateLetter.js";
import { BackspacePressed } from "./BackspacePressed.js";
import { EnterPressed } from "./EnterPressed.js";
import { IKeyPressed } from "./IKeyPressed";

export class NewKeyPressed{
    
    private _specialKey!: IKeyPressed;
    private _game: Game
    constructor(game: Game){
        this._game = game;
    
    }

    newLetter(letter:ValidateLetter):void{
        let letterValue: string = letter.transformCodeToLetter();
        this._game.gameLogic.setNewLetter(this._game.gameLogic.turn, this._game.gameLogic.actualPosition, letterValue);
        this._game.gameLogic.actualPosition = this._game.gameLogic.actualPosition + 1;
        this._game.gameLogic.actualWord += letterValue;
    }
    
    newKeyPressed(code: string):void{ 
        let letter:ValidateLetter = ValidateLetter.getInstance(code, this._game.gameLogic.actualPosition)
        if (letter.isValidLetter()){
            this.newLetter(letter);
        } 
        if (letter.isEnterKey()) {
            this._specialKey = new EnterPressed(this._game)
            this._specialKey.execute();
        }
        if (letter.isBackspaceKey()){
            this._specialKey = new BackspacePressed(this._game)
            this._specialKey.execute();
        } 
        
    }
}