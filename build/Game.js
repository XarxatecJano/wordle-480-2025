var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { Interface } from "./Interface.js";
import { ValidateLetter } from "./ValidateLetter.js";
import { MAX_WORD_SIZE } from "./env.js";
export var MAX_ATTEMPTS = 6;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(pickedWord) {
        var _this = _super.call(this) || this;
        _this.checkMisplacedLetters = function () {
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
                    _this.changeBackgroundPosition(_this._turn, i, "misplacedLetter");
            }
        };
        _this.checkWrongLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = _this._actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (_this._pickedWord.match(pattern) || []).length;
                if (numberOfCoincidences == 0)
                    _this.changeBackgroundPosition(_this._turn, i, "wrongLetter");
            }
        };
        _this.updateAfterANewWord = function () {
            var check = new CheckCorrectLetters();
            check.check(_this._actualWord, _this._pickedWord, _this._turn);
            _this.checkMisplacedLetters();
            _this.checkWrongLetters();
            _this._turn = _this._turn + 1;
            _this._actualPosition = 0;
            _this._actualWord = "";
        };
        _this._pickedWord = pickedWord;
        _this._actualWord = "";
        _this._turn = 1;
        _this._actualPosition = 0;
        return _this;
    }
    Object.defineProperty(Game.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        set: function (word) {
            this._pickedWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (num) {
            this._actualPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.newLetter = function (letter) {
        var letterValue = letter.transformCodeToLetter();
        this.setNewLetter(this.turn, this.actualPosition, letterValue);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letterValue;
    };
    Game.prototype.checkWordIsRight = function () {
        if (this._actualWord == this._pickedWord) {
            location.assign("/winner");
        }
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Game.prototype.enterPressed = function () {
        if (this._actualWord.length == MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    };
    Game.prototype.backspacePressed = function () {
        if (this._actualPosition > 0) {
            this._actualPosition -= 1;
            this.deleteLetter(this._turn, this._actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        var letter = ValidateLetter.getInstance(code, this._actualPosition);
        if (letter.isValidLetter())
            this.newLetter(letter);
        if (letter.isEnterKey())
            this.enterPressed();
        if (letter.isBackspaceKey())
            this.backspacePressed();
        this.changeBackgroundKey(code);
    };
    return Game;
}(Interface));
export { Game };
