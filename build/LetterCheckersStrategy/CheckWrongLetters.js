var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckWrongLetters.prototype.checkType = function () {
        return "wrong";
    };
    CheckWrongLetters.prototype.check = function (actualWord, pickedWord, turn, letterCount, markedPositions) {
        for (var i = 0; i < pickedWord.length; i++) {
            if (!(actualWord[i] in letterCount) || (letterCount[actualWord[i]] == 0 && !markedPositions[i])) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    };
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
