var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckMisplacedLetters.prototype.checkType = function () {
        return "misplaced";
    };
    CheckMisplacedLetters.prototype.check = function (wordData) {
        for (var i = 0; i < wordData.pickedWord.length; i++) {
            if (wordData.pickedWord[i] !== wordData.actualWord[i] && wordData.letterCount[wordData.actualWord[i]] > 0) {
                wordData.letterCount[wordData.actualWord[i]]--;
                this.interface.changeBackgroundPosition(wordData.turn, i, "misplacedLetter");
                wordData.markedPositions[i] = true;
            }
        }
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
