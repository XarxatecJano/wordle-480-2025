import { MAX_WORD_SIZE } from "./env";
export var LETTERS = { A: 60, Z: 90 };
export var GET_LETTER_VALUE = 3;
var ValidateLetter = /** @class */ (function () {
    function ValidateLetter(code, posicionActual) {
        this._code = code;
        this._actualPosition = posicionActual;
    }
    ValidateLetter.prototype.setCode = function (code) {
        this._code = code;
    };
    ValidateLetter.prototype.setActualPosition = function (actualPosition) {
        this._actualPosition = actualPosition;
    };
    ValidateLetter.getInstance = function (code, actualPosition) {
        if (!ValidateLetter.instance) {
            ValidateLetter.instance = new ValidateLetter(code, actualPosition);
        }
        ValidateLetter.instance.setCode(code);
        ValidateLetter.instance.setActualPosition(actualPosition);
        return ValidateLetter.instance;
    };
    ValidateLetter.prototype.isValidLetter = function () {
        return ((this._code.charCodeAt(GET_LETTER_VALUE) >= LETTERS.A && this._code.charCodeAt(GET_LETTER_VALUE) <= LETTERS.Z) || this._code === "Semicolon") && this._actualPosition < MAX_WORD_SIZE;
    };
    ValidateLetter.prototype.isEnterKey = function () {
        return this._code == "Enter";
    };
    ValidateLetter.prototype.isBackspaceKey = function () {
        return this._code == "Backspace";
    };
    ValidateLetter.prototype.transformCodeToLetter = function () {
        var letter = "";
        if (this._code == "Semicolon")
            letter = "Ñ";
        else
            letter = this._code.split("y")[1];
        return letter;
    };
    return ValidateLetter;
}());
export { ValidateLetter };
