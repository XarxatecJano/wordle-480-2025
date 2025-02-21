var MAX_WORD_SIZE = 5;
var MAX_ATTEMPTS = 6;
var LETTER_A = 65;
var LETTER_Z = 90;
var LETTER_Ñ = 165;
var LetterValidator = /** @class */ (function () {
    function LetterValidator() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
            "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK",
            "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "KeyÑ"
        ];
    }
    LetterValidator.prototype.isLetterInRange = function (asciiNumber) {
        return (LETTER_A <= asciiNumber && asciiNumber <= LETTER_Z) ||
            (asciiNumber === LETTER_Ñ);
    };
    LetterValidator.prototype.isPositionInRange = function (actualPosition) {
        return actualPosition < MAX_WORD_SIZE;
    };
    LetterValidator.prototype.isValidLetter = function (code, actualPosition) {
        var asciiNumber = code.charCodeAt(3);
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
        var asciiNumber = code.charCodeAt(3);
        return this.transformAsciiToLetter(asciiNumber);
    };
    return LetterValidator;
}());
export { LetterValidator };
