var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckMisplacedLetters.prototype.checkType = function () {
        return "misplaced";
    };
    CheckMisplacedLetters.prototype.check = function (actualWord, pickedWord, turn, letterCount, markedPositions) {
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] !== actualWord[i] && letterCount[actualWord[i]] > 0) {
                letterCount[actualWord[i]]--;
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                markedPositions[i] = true;
            }
        }
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
