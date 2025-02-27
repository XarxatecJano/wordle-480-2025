import { Game } from "../core/Game.js";
import { IKeyPressed } from "./IKeyPressed.js";
import { LetterValidatorFactory } from "../validators/LetterValidatorFactory.js";
import { EnterPressed } from "./EnterPressed.js";
import { BackspacePressed } from "./BackspacePressed.js";

export class LetterKeyPressed {
    private _game: Game;

    constructor(game: Game){
        this._game = game; 
    }

    newKeyPressed(code: string):void{ 
        var specialKeyPressed!: IKeyPressed;
        let letterValidator = LetterValidatorFactory.createValidator();
            if (letterValidator.isValidLetter(code, this._game.actualPosition)) {
                    this.newLetter(code);
            }
            if (letterValidator.isEnterKey(code)) {
                specialKeyPressed = new EnterPressed(this._game);
                specialKeyPressed.execute();
            }
            if (letterValidator.isBackspaceKey(code)) {
                specialKeyPressed = new BackspacePressed(this._game);
                specialKeyPressed.execute();
            }   
    }

    newLetter(code: string):void{
        let letterValidator = LetterValidatorFactory.createValidator();
        let letter: string = letterValidator.transformCodeToLetter(code);
        this._game.setNewLetter(this._game.turn, this._game.actualPosition, letter);
        this._game.actualPosition += 1;
        this._game.actualWord += letter;
    }

}
