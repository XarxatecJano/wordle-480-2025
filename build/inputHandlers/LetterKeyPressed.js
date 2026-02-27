import { LetterValidatorFactory } from "../validators/LetterValidatorFactory.js";
import { EnterPressed } from "./EnterPressed.js";
import { BackspacePressed } from "./BackspacePressed.js";
var LetterKeyPressed = /** @class */ (function () {
    function LetterKeyPressed(game) {
        this._game = game;
    }
    LetterKeyPressed.prototype.newKeyPressed = function (code) {
        var specialKeyPressed;
        var letterValidator = LetterValidatorFactory.createValidator();
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
    };
    LetterKeyPressed.prototype.newLetter = function (code) {
        var letterValidator = LetterValidatorFactory.createValidator();
        var letter = letterValidator.transformCodeToLetter(code);
        this._game.setNewLetter(this._game.turn, this._game.actualPosition, letter);
        this._game.actualPosition += 1;
        this._game.actualWord += letter;
    };
    return LetterKeyPressed;
}());
export { LetterKeyPressed };
