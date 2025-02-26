var CheckRightLetters = /** @class */ (function () {
    function CheckRightLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckRightLetters.prototype.checkType = function () {
        return "right";
    };
    CheckRightLetters.prototype.check = function (wordData) {
        for (var i = 0; i < wordData.pickedWord.length; i++) {
            if (wordData.pickedWord[i] === wordData.actualWord[i]) {
                wordData.letterCount[wordData.actualWord[i]]--;
                this.interface.changeBackgroundPosition(wordData.turn, i, "rightLetter");
                wordData.markedPositions[i] = true;
            }
        }
    };
    return CheckRightLetters;
}());
export { CheckRightLetters };
