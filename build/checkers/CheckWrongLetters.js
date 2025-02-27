var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckWrongLetters.prototype.checkType = function () {
        return "wrong";
    };
    CheckWrongLetters.prototype.checkLetters = function (wordData) {
        var actualWord = wordData.actualWord, letterCount = wordData.letterCount, markedPositions = wordData.markedPositions, turn = wordData.turn;
        for (var i = 0; i < actualWord.length; i++) {
            var letter = actualWord[i];
            if (this.isWrongLetter(letter, letterCount, markedPositions.get(i))) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    };
    CheckWrongLetters.prototype.isWrongLetter = function (letter, letterCount, isMarked) {
        var _a;
        var count = (_a = letterCount.get(letter)) !== null && _a !== void 0 ? _a : 0;
        return !letterCount.has(letter) || (count === 0 && !isMarked);
    };
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
