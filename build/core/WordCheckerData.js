var WordState = /** @class */ (function () {
    function WordState(actualWord, pickedWord, turn) {
        this.actualWord = actualWord;
        this.pickedWord = pickedWord;
        this.turn = turn;
        this.letterCount = new Map();
        this.markedPositions = new Map();
    }
    WordState.prototype.letterCountMap = function (pickedWord) {
        var _a;
        for (var _i = 0, pickedWord_1 = pickedWord; _i < pickedWord_1.length; _i++) {
            var letter = pickedWord_1[_i];
            var count = (_a = this.letterCount.get(letter)) !== null && _a !== void 0 ? _a : 0;
            this.letterCount.set(letter, count + 1);
        }
    };
    return WordState;
}());
export { WordState };
