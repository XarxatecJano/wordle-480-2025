import { VALID_LETTER_CODES } from "./env.js";
var Key = /** @class */ (function () {
    function Key() {
    }
    Key.prototype.isValidLetter = function (code) {
        return VALID_LETTER_CODES.includes(code);
    };
    Key.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Key.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Key.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    return Key;
}());
export { Key };
