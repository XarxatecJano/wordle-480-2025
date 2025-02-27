import { Word } from "./Word.js";
import { Letter } from "./Letter.js";
var WordsGenerator = /** @class */ (function () {
    function WordsGenerator(wordsArray) {
        this._words = this.generateWordsFromStrings(wordsArray);
    }
    Object.defineProperty(WordsGenerator.prototype, "Words", {
        get: function () {
            return this._words;
        },
        set: function (wordsArray) {
            this._words = wordsArray;
        },
        enumerable: false,
        configurable: true
    });
    WordsGenerator.prototype.generateWordsFromStrings = function (array) {
        var words = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var string = array_1[_i];
            var letters = [];
            for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
                var char = string_1[_a];
                letters.push(new Letter(char));
            }
            words.push(new Word(letters));
        }
        return words;
    };
    WordsGenerator.prototype.getRandomWord = function () {
        var min = 0;
        var max = this._words.length - 1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))];
    };
    return WordsGenerator;
}());
export { WordsGenerator };
