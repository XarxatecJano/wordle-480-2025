var CheckRightLetters = /** @class */ (function () {
    function CheckRightLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckRightLetters.prototype.checkType = function () {
        return "right";
    };
    CheckRightLetters.prototype.checkLetters = function (wordData) {
        var _a;
        var pickedWord = wordData.pickedWord, actualWord = wordData.actualWord, letterCount = wordData.letterCount, markedPositions = wordData.markedPositions, turn = wordData.turn;
        for (var i = 0; i < pickedWord.length; i++) {
            var letter = actualWord[i];
            var count = (_a = letterCount.get(letter)) !== null && _a !== void 0 ? _a : 0;
            if (this.isCorrectlyPlacedLetter(pickedWord[i], letter)) {
                letterCount.set(letter, count - 1);
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
                markedPositions.set(i, true);
            }
        }
    };
    CheckRightLetters.prototype.isCorrectlyPlacedLetter = function (pickedLetter, actualLetter) {
        return pickedLetter === actualLetter;
    };
    return CheckRightLetters;
}());
export { CheckRightLetters };
