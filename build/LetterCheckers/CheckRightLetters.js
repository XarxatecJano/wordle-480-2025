import { MAX_WORD_SIZE } from "../env.js";
var CheckRightLetters = /** @class */ (function () {
    function CheckRightLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckRightLetters.prototype.check = function (actualWord, pickedWord, turn) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (pickedWord[i] === actualWord[i]) {
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
            }
        }
    };
    return CheckRightLetters;
}());
export { CheckRightLetters };
