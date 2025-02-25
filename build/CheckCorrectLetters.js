import { MAX_WORD_SIZE } from "./env.js";
var CheckCorrectLetters = /** @class */ (function () {
    function CheckCorrectLetters(interf) {
        var _this = this;
        this.check = function (actualWord, pickedWord, turn) {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (pickedWord[i] == actualWord[i]) {
                    _this._interface.changeBackgroundPosition(turn, i, "rightLetter");
                    _this._interface.changeBackgroundKey(pickedWord[i], "rightLetter");
                }
            }
        };
        this._interface = interf;
    }
    return CheckCorrectLetters;
}());
export { CheckCorrectLetters };
