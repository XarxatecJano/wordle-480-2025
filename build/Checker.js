import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Letter } from "./Letter.js";
import { Interface } from "./Interface.js";
var Checker = /** @class */ (function () {
    function Checker(pickedWord) {
        this._actualLetters = "";
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
        this._validLetterCodes = new Letter();
        this._pickedWord = pickedWord;
        this._interface = new Interface();
    }
    Object.defineProperty(Checker.prototype, "actualLetters", {
        get: function () {
            return this._actualLetters;
        },
        set: function (letters) {
            this._actualLetters = letters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (word) {
            this._pickedWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (num) {
            this._actualPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Checker.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (i) {
            this._interface = i;
        },
        enumerable: false,
        configurable: true
    });
    Checker.prototype.isValidLetter = function (code) {
        return this._validLetterCodes.includes(code) && this.actualPosition < MAX_WORD_SIZE;
    };
    Checker.prototype.checkWordIsRight = function () {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    };
    Checker.prototype.checkRightLetters = function () {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (this._pickedWord[i] == this._actualWord[i]) {
                this._interface.changeBackgroundPosition(this._turn, i, "rightLetter");
            }
        }
    };
    Checker.prototype.checkMisplacedLetters = function () {
        var actualLetter = "";
        var pattern;
        var numberOfCoincidences = 0;
        var isMisplacedLetter;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (this._pickedWord[i] == this._actualWord[i])
                isMisplacedLetter = false;
            if (numberOfCoincidences > 0 && isMisplacedLetter)
                this._interface.changeBackgroundPosition(this._turn, i, "misplacedLetter");
        }
    };
    Checker.prototype.checkWrongLetters = function () {
        var actualLetter = "";
        var pattern;
        var numberOfCoincidences = 0;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this._actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (this._pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences == 0)
                this._interface.changeBackgroundPosition(this._turn, i, "wrongLetter");
        }
    };
    Checker.prototype.checkGameIsOver = function () {
        if (this._turn == MAX_ATTEMPTS &&
            this._actualWord != this._pickedWord) {
            location.assign("/loser");
        }
    };
    return Checker;
}());
export { Checker };
