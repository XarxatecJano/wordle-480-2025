import { MAX_WORD_SIZE } from "./env.js";
var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interf) {
        var _this = this;
        this.check = function (actualWord, pickedWord, turn) {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (pickedWord.match(pattern) || []).length;
                if (numberOfCoincidences == 0)
                    _this._interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        };
        this._interface = interf;
    }
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
