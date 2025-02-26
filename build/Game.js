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
import { BackspacePressed } from "./BackspacePressed.js";
import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";
import { CheckWrongLetters } from "./CheckWrongLetters.js";
import { EnterPressed } from "./EnterPressed.js";
import { Interface } from "./Interface.js";
import { ValidateLetter } from "./ValidateLetter.js";
export var MAX_ATTEMPTS = 6;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(pickedWord) {
        var _this = _super.call(this) || this;
        _this.updateAfterANewWord = function () {
            var strategies = [
                new CheckCorrectLetters(_this),
                new CheckMisplacedLetters(_this),
                new CheckWrongLetters(_this)
            ];
            strategies.forEach(function (strategy) { return strategy.check(_this); });
            _this.paintBakcgroundCells();
            _this._rightPositionLetters.clear();
            _this._MisplacedPositionLetters.clear;
            _this._typeCell.clear();
            _this._turn += 1;
            _this._actualPosition = 0;
            _this._actualWord = "";
        };
        _this._pickedWord = pickedWord;
        _this._actualWord = "";
        _this._turn = 1;
        _this._actualPosition = 0;
        _this._rightPositionLetters = new Map();
        _this._MisplacedPositionLetters = new Map();
        _this._typeCell = new Map();
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
    Object.defineProperty(Game.prototype, "rightPositionLetters", {
        get: function () {
            return this._rightPositionLetters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "misplacedPositionLetters", {
        get: function () {
            return this._MisplacedPositionLetters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "typeCell", {
        get: function () {
            return this._typeCell;
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
    Game.prototype.paintBakcgroundCells = function () {
        var _this = this;
        this._typeCell.forEach(function (type, position) {
            console.log("turno " + position + " tipo " + type);
            _this.changeBackgroundPosition(_this.turn, position, type);
        });
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS && this._actualWord != this._pickedWord) {
            location.assign("/loser");
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        var letter = ValidateLetter.getInstance(code, this._actualPosition);
        if (letter.isValidLetter()) {
            this.newLetter(letter);
        }
        if (letter.isEnterKey()) {
            this._specialKey = new EnterPressed(this);
            this._specialKey.execute();
        }
        if (letter.isBackspaceKey()) {
            this._specialKey = new BackspacePressed(this);
            this._specialKey.execute();
        }
    };
    return Game;
}(Interface));
export { Game };
