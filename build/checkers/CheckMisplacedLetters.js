var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckMisplacedLetters.prototype.checkType = function () {
        return "misplaced";
    };
    CheckMisplacedLetters.prototype.checkLetters = function (wordData) {
        var _a;
        var pickedWord = wordData.pickedWord, actualWord = wordData.actualWord, letterCount = wordData.letterCount, markedPositions = wordData.markedPositions, turn = wordData.turn;
        for (var i = 0; i < pickedWord.length; i++) {
            var letter = actualWord[i];
            var count = (_a = letterCount.get(letter)) !== null && _a !== void 0 ? _a : 0;
            if (this.isMisplacedLetter(letter, pickedWord[i], letterCount)) {
                letterCount.set(letter, count - 1);
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                markedPositions.set(i, true);
            }
        }
    };
    CheckMisplacedLetters.prototype.isMisplacedLetter = function (letter, correctLetter, letterCount) {
        var _a;
        return letter !== correctLetter && ((_a = letterCount.get(letter)) !== null && _a !== void 0 ? _a : 0) > 0;
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
