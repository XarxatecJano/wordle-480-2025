import { VALID_LETTER_CODES } from "./env.js";
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.isValidLetter = function (code) {
        return VALID_LETTER_CODES.includes(code);
    };
    Keyboard.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Keyboard.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    return Keyboard;
}());
export { Keyboard };
