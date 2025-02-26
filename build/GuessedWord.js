import { MAX_WORD_SIZE } from "./env.js";
var GuessedWord = /** @class */ (function () {
    function GuessedWord(word, actualPos, turn, letterHistory, interface0) {
        this._guessWord = word;
        this._actualPosition = actualPos;
        this._turn = turn;
        this._interface = interface0;
        this._letterHistory = letterHistory;
    }
    Object.defineProperty(GuessedWord.prototype, "guessWord", {
        get: function () {
            return this._guessWord;
        },
        set: function (value) {
            this._guessWord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuessedWord.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (value) {
            this._turn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuessedWord.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (value) {
            this._actualPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuessedWord.prototype, "letterHistory", {
        get: function () {
            return this._letterHistory;
        },
        set: function (value) {
            this._letterHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    GuessedWord.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    GuessedWord.prototype.addLetterIfPossible = function (code) {
        if (this._actualPosition < MAX_WORD_SIZE) {
            var letter = this.transformCodeToLetter(code);
            this._interface.setNewLetter(this.turn, this._actualPosition, letter);
            this._actualPosition += 1;
            this._guessWord += letter;
        }
    };
    GuessedWord.prototype.deleteLetterIfPossible = function () {
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this._interface.deleteLetter(this._turn, this._actualPosition);
            this._interface.resetLastLetterBGColor(this._guessWord, this._letterHistory);
            this._guessWord = this._guessWord.substring(0, this._guessWord.length - 1);
        }
    };
    return GuessedWord;
}());
export { GuessedWord };
