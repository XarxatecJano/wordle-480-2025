import { MAX_WORD_SIZE } from "./env.js";
var WordValidator = /** @class */ (function () {
    function WordValidator() {
    }
    WordValidator.prototype.isComplete = function (word) {
        console.log("Verificando completitud: palabra=\"".concat(word, "\", longitud=").concat(word.length, ", MAX_WORD_SIZE=").concat(MAX_WORD_SIZE));
        return word.length === MAX_WORD_SIZE;
    };
    WordValidator.prototype.isCorrect = function (userWord, targetWord) {
        return userWord === targetWord;
    };
    return WordValidator;
}());
export { WordValidator };
