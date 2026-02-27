import { VALID_LETTERS } from "../../env.js";
var Letter = /** @class */ (function () {
    function Letter(code) {
        this.code = "";
        this.code = code;
        if (!(this.isEnterKey() || this.isBackspaceKey() || this.isCode(code))) {
            this.code = this.charToCode(code);
            if (!this.isValidLetter()) {
                throw new Error("Codigo desconocido: " + code);
            }
        }
    }
    Letter.prototype.isCode = function (code) {
        return code.startsWith("Key");
    };
    Letter.prototype.charToCode = function (char) {
        return "Key" + char;
    };
    Letter.prototype.codeToChar = function (code) {
        var char = "";
        if (code == "Semicolon")
            char = "Ñ";
        else
            char = code.split("y")[1];
        return char;
    };
    Letter.prototype.getChar = function () {
        return this.codeToChar(this.code);
    };
    Letter.prototype.getCode = function () {
        return this.code;
    };
    Letter.prototype.isValidLetter = function () {
        return VALID_LETTERS.includes(this.code);
    };
    Letter.prototype.isEnterKey = function () {
        return this.code == "Enter";
    };
    Letter.prototype.isBackspaceKey = function () {
        return this.code == "Backspace";
    };
    Letter.prototype.equals = function (otherLetter) {
        return this.getCode() == otherLetter.getCode();
    };
    return Letter;
}());
export { Letter };
