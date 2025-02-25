import { Word } from "./Word.js";
import { Letter } from "./Letter.js";
var Words = /** @class */ (function () {
    function Words(wordsArray) {
        this._words = this.generateWords(wordsArray);
    }
    Words.prototype.charToCode = function (char) {
        return "Key" + char;
    };
    Words.prototype.generateWords = function (array) {
        var words = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var string = array_1[_i];
            var letters = [];
            for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
                var char = string_1[_a];
                letters.push(new Letter(this.charToCode(char)));
            }
            words.push(new Word(letters));
        }
        return words;
    };
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
        return this._words[Math.trunc(Math.random() * (max - min + 1))];
    };
    return Words;
}());
export { Words };
