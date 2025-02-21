export var MAX_WORD_SIZE = 5;
export var LETTERS = { A: 60, Z: 90 };
var GET_LETTER_VALUE = 3;
var Letter = /** @class */ (function () {
    function Letter(code, posicionActual) {
        this._code = code;
        this._actualPosition = posicionActual;
    }
    Letter.prototype.setCode = function (code) {
        this._code = code;
    };
    Letter.prototype.setActualPosition = function (actualPosition) {
        this._actualPosition = actualPosition;
    };
    Letter.getInstance = function (code, actualPosition) {
        if (!Letter.instance) {
            Letter.instance = new Letter(code, actualPosition);
        }
        Letter.instance.setCode(code);
        Letter.instance.setActualPosition(actualPosition);
        return Letter.instance;
    };
    Letter.prototype.isValidLetter = function () {
        return ((this._code.charCodeAt(GET_LETTER_VALUE) >= LETTERS.A && this._code.charCodeAt(GET_LETTER_VALUE) <= LETTERS.Z) || this._code === "Semicolon") && this._actualPosition < MAX_WORD_SIZE;
    };
    Letter.prototype.isEnterKey = function () {
        return this._code == "Enter";
    };
    Letter.prototype.isBackspaceKey = function () {
        return this._code == "Backspace";
    };
    Letter.prototype.transformCodeToLetter = function () {
        var letter = "";
        if (this._code == "Semicolon")
            letter = "Ñ";
        else
            letter = this._code.split("y")[1];
        return letter;
    };
    return Letter;
}());
export { Letter };
