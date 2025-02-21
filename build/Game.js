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
import { Interface } from "./Interface.js";
var MAX_WORD_SIZE = 5;
var MAX_ATTEMPTS = 6;
var LETTER_A = 65;
var LETTER_Z = 90;
var LETTER_Ñ = 165;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(pickedWord) {
        var _this = _super.call(this) || this;
        _this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (_this._pickedWord[i] == _this._actualWord[i]) {
                    _this._interface.changeBackgroundPosition(_this._turn, i, "rightLetter");
                }
            }
        };
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
                    _this._interface.changeBackgroundPosition(_this._turn, i, "misplacedLetter");
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
                    _this._interface.changeBackgroundPosition(_this._turn, i, "wrongLetter");
            }
        };
        _this.updateAfterANewWord = function () {
            _this.checkRightLetters();
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
        _this._validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        _this._interface = new Interface();
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
    Object.defineProperty(Game.prototype, "validLetterCodes", {
        get: function () {
            return this._validLetterCodes;
        },
        set: function (letters) {
            this._validLetterCodes = letters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (i) {
            this._interface = i;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.isValidLetter = function (code) {
        return this._validLetterCodes.includes(code) && this._actualPosition < MAX_WORD_SIZE;
    };
    Game.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Game.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Game.prototype.transformCodeToLetter = function (code) {
        var letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    };
    Game.prototype.newLetter = function (code) {
        var letter = this.transformCodeToLetter(code);
        this._interface.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition = this._actualPosition + 1;
        this._actualWord += letter;
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
            this._interface.deleteLetter(this._turn, this._actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        this._interface.changeBackgroundKey(code);
    };
    return Game;
}(Interface));
export { Game };
