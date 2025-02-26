var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Game } from "../Game";
import { ValidateLetter } from "../ValidateLetter";
import { BackspacePressed } from "./BackspacePressed";
import { EnterPressed } from "./EnterPressed";
var NewLetterPressed = /** @class */ (function (_super) {
    __extends(NewLetterPressed, _super);
    function NewLetterPressed(pickedWord) {
        return _super.call(this, pickedWord) || this;
    }
    NewLetterPressed.prototype.newLetter = function (letter) {
        var letterValue = letter.transformCodeToLetter();
        this.setNewLetter(this.turn, this.actualPosition, letterValue);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letterValue;
    };
    NewLetterPressed.prototype.newKeyPressed = function (code) {
        var letter = ValidateLetter.getInstance(code, this._actualPosition);
        if (letter.isValidLetter()) {
            this.newLetter(letter);
        }
        if (letter.isEnterKey()) {
            this._specialKey = new EnterPressed(this);
            this._specialKey.execute();
        }
        if (letter.isBackspaceKey()) {
            this._specialKey = new BackspacePressed(this);
            this._specialKey.execute();
        }
    };
    return NewLetterPressed;
}(Game));
export { NewLetterPressed };
