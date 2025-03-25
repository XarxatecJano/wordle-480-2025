import { MAX_WORD_SIZE } from "./env.js";
var InputHandler = /** @class */ (function () {
    function InputHandler(validLetterCodes, currentPosition) {
        this.validLetterCodes = validLetterCodes;
        this.currentPosition = currentPosition;
    }
    InputHandler.prototype.setCurrentPosition = function (position) {
        this.currentPosition = position;
    };
    InputHandler.prototype.isValidLetter = function (code) {
        if (code === "Enter" || code === "backspace") {
            return false;
        }
        return this.validLetterCodes.includes(code) && this.currentPosition < MAX_WORD_SIZE;
    };
    InputHandler.prototype.isEnterKey = function (code) {
        return code === "Enter";
    };
    InputHandler.prototype.isBackspaceKey = function (code) {
        return code === "Backspace";
    };
    InputHandler.prototype.transformCodeToLetter = function (code) {
        if (code === "Semicolon")
            return "Ñ";
        return code.split("y")[1];
    };
    return InputHandler;
}());
export { InputHandler };
