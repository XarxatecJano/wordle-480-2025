import { Palabra } from "./Palabra.js";
var Word = /** @class */ (function () {
    function Word(wordsArray) {
        this._words = wordsArray.map(function (word) { return new Palabra(word); });
    }
    Object.defineProperty(Word.prototype, "palabras", {
        get: function () {
            return this._words;
        },
        enumerable: false,
        configurable: true
    });
    Word.prototype.getRandomWord = function () {
        var index = Math.floor(Math.random() * this._words.length);
        return this._words[index];
    };
    return Word;
}());
export { Word };
