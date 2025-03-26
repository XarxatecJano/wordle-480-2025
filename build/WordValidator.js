import { MAX_WORD_SIZE } from "./env.js";
var WordValidator = /** @class */ (function () {
    function WordValidator() {
    }
    WordValidator.prototype.checkWord = function (actualWord, pickedWord, turn, ui) {
        this.checkRightLetters(actualWord, pickedWord, turn, ui);
        this.checkMisplacedLetters(actualWord, pickedWord, turn, ui);
        this.checkWrongLetters(actualWord, pickedWord, turn, ui);
    };
    WordValidator.prototype.checkRightLetters = function (actualWord, pickedWord, turn, ui) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (actualWord[i] === pickedWord[i]) {
                ui.changeCellColor(turn, i, "rightLetter");
            }
        }
    };
    WordValidator.prototype.checkMisplacedLetters = function (actualWord, pickedWord, turn, ui) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var actualLetter = actualWord[i];
            var occurrences = (pickedWord.match(new RegExp(actualLetter, "g")) || []).length;
            var isNotRightPlace = actualLetter !== pickedWord[i];
            if (occurrences > 0 && isNotRightPlace) {
                ui.changeCellColor(turn, i, "misplacedLetter");
            }
        }
    };
    WordValidator.prototype.checkWrongLetters = function (actualWord, pickedWord, turn, ui) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var actualLetter = actualWord[i];
            var occurrences = (pickedWord.match(new RegExp(actualLetter, "g")) || []).length;
            if (occurrences === 0) {
                ui.changeCellColor(turn, i, "wrongLetter");
            }
        }
    };
    return WordValidator;
}());
export { WordValidator };
