import { MAX_WORD_SIZE } from "./env.js";
var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interf) {
        var _this = this;
        this.check = function (actualWord, pickedWord, turn) {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (pickedWord.match(pattern) || []).length;
                if (pickedWord[i] == actualWord[i])
                    isMisplacedLetter = false;
                if (numberOfCoincidences > 0 && isMisplacedLetter) {
                    _this._interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                    _this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
                }
            }
        };
        this._interface = interf;
    }
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
