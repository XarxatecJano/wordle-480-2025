var Words = /** @class */ (function () {
    function Words(wordsArray) {
        this._words = wordsArray;
    }
    Object.defineProperty(Words.prototype, "Words", {
        get: function () {
            return this._words;
        },
        set: function (wordsArray) {
            this._words = wordsArray;
        },
        enumerable: false,
        configurable: true
    });
    Words.prototype.getRandomWord = function () {
        var min = 0;
        var max = this._words.length - 1;
        return this._words[Math.floor(Math.random() * (max - min + 1))];
    };
    return Words;
}());
export { Words };
