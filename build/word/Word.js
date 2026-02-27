var Word = /** @class */ (function () {
    function Word(gameManager) {
        this._letters = [];
        this._gameManager = gameManager;
        this._hash = new Map();
    }
    Word.prototype.actuallength = function () { return this.letters.length; };
    Word.prototype.actualLetter = function () { return this.letters[this.gameManager.position - 1]; };
    Word.prototype.specificLetter = function (position) { return this.letters[position]; };
    Word.prototype.addLetter = function (letter) { this._letters.push(letter); };
    Word.prototype.removeLetter = function () { this._letters.pop(); };
    Word.prototype.allLetters = function () {
        var letters = [];
        for (var _i = 0, _a = this.letters; _i < _a.length; _i++) {
            var letter = _a[_i];
            letters.push(letter);
        }
        return letters;
    };
    Word.prototype.toString = function () {
        var word = "";
        this._letters.forEach(function (element) { word += element; });
        return word;
    };
    Object.defineProperty(Word.prototype, "letters", {
        get: function () { return this._letters; },
        set: function (wordsArray) { this._letters = wordsArray; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "gameManager", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "hash", {
        get: function () { return this._hash; },
        set: function (value) { this._hash = value; },
        enumerable: false,
        configurable: true
    });
    return Word;
}());
export { Word };
