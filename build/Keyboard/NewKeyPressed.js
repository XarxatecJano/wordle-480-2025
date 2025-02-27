import { ValidateLetter } from "../ValidateLetter.js";
import { BackspacePressed } from "./BackspacePressed.js";
import { EnterPressed } from "./EnterPressed.js";
var NewKeyPressed = /** @class */ (function () {
    function NewKeyPressed(game) {
        this._game = game;
    }
    NewKeyPressed.prototype.newLetter = function (letter) {
        var letterValue = letter.transformCodeToLetter();
        this._game.setNewLetter(this._game.turn, this._game.actualPosition, letterValue);
        this._game.actualPosition = this._game.actualPosition + 1;
        this._game.actualWord += letterValue;
    };
    NewKeyPressed.prototype.newKeyPressed = function (code) {
        var letter = ValidateLetter.getInstance(code, this._game.actualPosition);
        if (letter.isValidLetter()) {
            this.newLetter(letter);
        }
        if (letter.isEnterKey()) {
            this._specialKey = new EnterPressed(this._game);
            this._specialKey.execute();
        }
        if (letter.isBackspaceKey()) {
            this._specialKey = new BackspacePressed(this._game);
            this._specialKey.execute();
        }
    };
    return NewKeyPressed;
}());
export { NewKeyPressed };
