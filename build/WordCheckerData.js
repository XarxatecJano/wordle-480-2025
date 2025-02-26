var WordCheckData = /** @class */ (function () {
    function WordCheckData(actualWord, pickedWord, turn) {
        this.actualWord = actualWord;
        this.pickedWord = pickedWord;
        this.turn = turn;
        this.letterCount = {};
        this.markedPositions = {};
        for (var _i = 0, pickedWord_1 = pickedWord; _i < pickedWord_1.length; _i++) {
            var letter = pickedWord_1[_i];
            this.letterCount[letter] = (this.letterCount[letter] || 0) + 1;
        }
    }
    return WordCheckData;
}());
export { WordCheckData };
