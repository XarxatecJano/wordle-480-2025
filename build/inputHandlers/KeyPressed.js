import { LetterValidatorFactory } from "../validators/LetterValidatorFactory.js";
import { EnterPressed } from "../inputHandlers/EnterPressed.js";
import { BackspacePressed } from "../inputHandlers/BackspacePressed.js";
var KeyPressed = /** @class */ (function () {
    function KeyPressed(game) {
        this._game = game;
    }
    KeyPressed.prototype.newKeyPressed = function (code) {
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
    KeyPressed.prototype.newLetter = function (code) {
        var letterValidator = LetterValidatorFactory.createValidator();
        var letter = letterValidator.transformCodeToLetter(code);
        this._game.setNewLetter(this._game.turn, this._game.actualPosition, letter);
        this._game.actualPosition += 1;
        this._game.actualWord += letter;
    };
    return KeyPressed;
}());
export { KeyPressed };
