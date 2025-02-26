var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckWrongLetters.prototype.checkType = function () {
        return "wrong";
    };
    CheckWrongLetters.prototype.check = function (wordData) {
        for (var i = 0; i < wordData.pickedWord.length; i++) {
            if (!(wordData.actualWord[i] in wordData.letterCount) || (wordData.letterCount[wordData.actualWord[i]] == 0 && !wordData.markedPositions[i])) {
                this.interface.changeBackgroundPosition(wordData.turn, i, "wrongLetter");
            }
        }
    };
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
