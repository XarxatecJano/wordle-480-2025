import { Word } from "../model/Word.js";
import { Letter } from "../model/Letter.js";
var WordGenerator = /** @class */ (function () {
    function WordGenerator(wordsArray) {
        this._words = this.generateWords(wordsArray);
    }
    WordGenerator.prototype.charToCode = function (char) {
        return "Key" + char;
    };
    WordGenerator.prototype.generateWords = function (array) {
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
    Object.defineProperty(WordGenerator.prototype, "Words", {
        get: function () {
            return this._words;
        },
        set: function (wordsArray) {
            this._words = wordsArray;
        },
        enumerable: false,
        configurable: true
    });
    WordGenerator.prototype.getRandomWord = function () {
        var min = 0;
        var max = this._words.length - 1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))];
    };
    return WordGenerator;
}());
export { WordGenerator };
