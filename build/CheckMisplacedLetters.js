import { MAX_WORD_SIZE } from "./env.js";
var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interf) {
        var _this = this;
        this.check = function (actualWord, pickedWord, turn) {
            var actualLetter = "";
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = actualWord[i];
                if (pickedWord[i] == actualWord[i])
                    isMisplacedLetter = false;
                if (isMisplacedLetter)
                    _this.changeColorDependingOnCoincidences(turn, i, actualWord, actualLetter, pickedWord);
            }
        };
        this._interface = interf;
    }
    CheckMisplacedLetters.prototype.changeColorDependingOnCoincidences = function (turn, actualPosition, actualWord, actualLetter, pickedWord) {
        var numberOfCoincidences = this.getNumberOfCoincidences(pickedWord, actualLetter);
        var numberOfCoincidencesActualWord = this.getNumberOfCoincidences(actualWord, actualLetter);
        numberOfCoincidencesActualWord -= numberOfCoincidences;
        var j = 0;
        for (j; j < numberOfCoincidences; j++) {
            this._interface.changeBackgroundPosition(turn, actualPosition, "misplacedLetter");
            this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
        }
        for (j; j < numberOfCoincidencesActualWord; j++) {
            this._interface.changeBackgroundPosition(turn, actualPosition, "wrongLetter");
        }
    };
    CheckMisplacedLetters.prototype.getNumberOfCoincidences = function (word, actualLetter) {
        var pattern = new RegExp(actualLetter, "g");
        return (word.match(pattern) || []).length;
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
