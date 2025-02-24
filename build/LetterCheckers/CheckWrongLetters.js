import { MAX_WORD_SIZE } from "../env.js";
var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckWrongLetters.prototype.check = function (actualWord, pickedWord, turn) {
        var actualLetter = "";
        var pattern;
        var numberOfCoincidences = 0;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences === 0) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    };
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
