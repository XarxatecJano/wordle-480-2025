import { MAX_WORD_SIZE } from "../env.js";
var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interfaceInstance) {
        this.interface = interfaceInstance;
        this.lettersStates = [];
    }
    CheckMisplacedLetters.prototype.check = function (actualWord, pickedWord, turn) {
        var actualLetter = "";
        var pattern;
        var numberOfCoincidences = 0;
        var isMisplacedLetter;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (pickedWord.match(pattern) || []).length;
            if (pickedWord[i] === actualWord[i])
                isMisplacedLetter = false;
            if (numberOfCoincidences > 0 && isMisplacedLetter) {
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
            }
        }
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
