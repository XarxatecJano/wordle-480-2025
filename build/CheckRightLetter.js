var MAX_WORD_SIZE = 5;
var CheckRightLetters = /** @class */ (function () {
    function CheckRightLetters(interfaceInstance) {
        var _this = this;
        this.check = function (actualWord, pickedWord, turn) {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (pickedWord[i] == actualWord[i]) {
                    _this._interface.changeBackgroundPosition(turn, i, "rightLetter");
                }
            }
        };
        this._interface = interfaceInstance;
    }
    return CheckRightLetters;
}());
export { CheckRightLetters };
