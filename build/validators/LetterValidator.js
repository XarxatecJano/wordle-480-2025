import { MAX_WORD_SIZE } from "../config/env.js";
var LETTER = { A: 65, Z: 90 };
var LETTER_CODE_POSITION_VALUE = 3;
var LetterValidator = /** @class */ (function () {
    function LetterValidator() {
    }
    LetterValidator.prototype.isLetterInRange = function (asciiNumber) {
        return (LETTER.A <= asciiNumber && asciiNumber <= LETTER.Z);
    };
    LetterValidator.prototype.isPositionInRange = function (actualPosition) {
        return actualPosition < MAX_WORD_SIZE;
    };
    LetterValidator.prototype.isValidLetter = function (code, actualPosition) {
        var asciiNumber = 0;
        if (code == "Semicolon") {
            return this.isPositionInRange(actualPosition);
        }
        asciiNumber = code.charCodeAt(LETTER_CODE_POSITION_VALUE);
        return this.isLetterInRange(asciiNumber) && this.isPositionInRange(actualPosition);
    };
    LetterValidator.prototype.isEnterKey = function (code) {
        return code === "Enter";
    };
    LetterValidator.prototype.isBackspaceKey = function (code) {
        return code === "Backspace";
    };
    LetterValidator.prototype.transformAsciiToLetter = function (asciiNumber) {
        return String.fromCharCode(asciiNumber);
    };
    LetterValidator.prototype.transformCodeToLetter = function (code) {
        if (code == 'Semicolon')
            return 'Ñ';
        var asciiNumber = code.charCodeAt(LETTER_CODE_POSITION_VALUE);
        return this.transformAsciiToLetter(asciiNumber);
    };
    return LetterValidator;
}());
export { LetterValidator };
