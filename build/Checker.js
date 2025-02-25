import { MAX_WORD_SIZE, MAX_ATTEMPTS, } from "./env.js";
import { Interface } from "./Interface.js";
var Checker = /** @class */ (function () {
    function Checker(pickedWord) {
        var _this = this;
        this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (_this._pickedWord[i] == _this._actualWord[i]) {
                    _this._interface.changeBackgroundPosition(_this._turn, i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = _this._actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (_this._pickedWord.match(pattern) || []).length;
                if (_this._pickedWord[i] == _this._actualWord[i])
                    isMisplacedLetter = false;
                if (numberOfCoincidences > 0 && isMisplacedLetter)
                    _this._interface.changeBackgroundPosition(_this._turn, i, "misplacedLetter");
            }
        };
        this.checkWrongLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = _this._actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (_this._pickedWord.match(pattern) || []).length;
                if (numberOfCoincidences == 0)
                    _this._interface.changeBackgroundPosition(_this._turn, i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = function () {
            _this.checkRightLetters();
            _this.checkMisplacedLetters();
            _this.checkWrongLetters();
            _this.updateActualLetters();
            _this._turn = _this._turn + 1;
            _this._actualPosition = 0;
            _this._actualWord = "";
        };
        this._actualLetters = "";
        this._pickedWord = pickedWord;
        this._actualWord = "";
        this._turn = 1;
        this._actualPosition = 0;
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
    Checker.prototype.checkWordIsRight = function () {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    };
    Checker.prototype.checkGameIsOver = function () {
        if (this._turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Checker.prototype.aumentarPosicion = function () {
        this._actualPosition = this._actualPosition + 1;
        console.log(this._actualPosition);
    };
    Checker.prototype.updateActualLetters = function () {
        if (this._turn == 1) {
            this.actualLetters = this._actualWord;
        }
        else {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                console.log("Numero" + this._actualWord[i]);
                if (!this._actualLetters[i].includes(this._actualWord[i])) {
                    this._actualLetters += this._actualWord[i];
                }
            }
        }
    };
    return Checker;
}());
export { Checker };
