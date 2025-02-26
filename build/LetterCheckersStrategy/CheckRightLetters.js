var CheckRightLetters = /** @class */ (function () {
    function CheckRightLetters(interfaceInstance) {
        this.interface = interfaceInstance;
    }
    CheckRightLetters.prototype.checkType = function () {
        return "right";
    };
    CheckRightLetters.prototype.check = function (actualWord, pickedWord, turn, letterCount, markedPositions) {
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === actualWord[i]) {
                letterCount[actualWord[i]]--;
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
                markedPositions[i] = true;
            }
        }
    };
    return CheckRightLetters;
}());
export { CheckRightLetters };
