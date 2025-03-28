import { Word } from "./Word.js";
var WordManager = /** @class */ (function () {
    function WordManager(pickedWord, gameManager) {
        this._pickedWord = pickedWord;
        this._gameManager = gameManager;
        this._words = [new Word(this.gameManager)];
    }
    WordManager.prototype.allLetters = function () {
        var totalLetters = [];
        for (var _i = 0, _a = this.words; _i < _a.length; _i++) {
            var word = _a[_i];
            for (var _b = 0, _c = word.allWordsLetters(); _b < _c.length; _b++) {
                var letter = _c[_b];
                totalLetters.push(letter);
            }
        }
        return totalLetters;
    };
    WordManager.prototype.concidences = function (index) {
        var pattern = new RegExp(this.actualWord().specificLetter(index), "g");
        return (RegExp(pattern).exec(this.pickedWord) || []).length;
    };
    WordManager.prototype.newEmptyWord = function () { this.words.push(new Word(this.gameManager)); };
    WordManager.prototype.actualWord = function () { return this.words[this.gameManager.turn]; };
    WordManager.prototype.actualWordLength = function () { return this.actualWord().actuallength(); };
    WordManager.prototype.actualWordString = function () { return this.actualWord().toString(); };
    WordManager.prototype.sameWord = function () { return this.actualWordString() == this.pickedWord; };
    WordManager.prototype.specificWord = function (index) { return this.words[index]; };
    WordManager.prototype.specificWordString = function (index) { return this.specificWord(index).toString(); };
    WordManager.prototype.sameLetter = function (index) { return this.actualWord().specificLetter(index) == this._pickedWord[index]; };
    Object.defineProperty(WordManager.prototype, "pickedWord", {
        get: function () { return this._pickedWord; },
        set: function (value) { this._pickedWord = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordManager.prototype, "words", {
        get: function () { return this._words; },
        set: function (value) { this._words = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WordManager.prototype, "gameManager", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    return WordManager;
}());
export { WordManager };
