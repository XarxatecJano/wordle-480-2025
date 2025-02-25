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
import { MAX_ATTEMPTS } from "./env.js";
import { LetterCheckerFactory } from "./LetterCheckerFactory.js";
import { LetterValidatorFactory } from "./LetterValidatorFactory.js";
import { EnterPressed } from "./SpecialKeyPressedStrategy/EnterPressed.js";
import { BackspacePressed } from "./SpecialKeyPressedStrategy/BackspacePressed.js";
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(pickedWord) {
        var _this = _super.call(this) || this;
        _this.updateAfterANewWord = function () {
            var letterCheckerFactory = LetterCheckerFactory.createCheckers(_this);
            letterCheckerFactory.forEach(function (checkLetters) { return checkLetters.check(_this.actualWord, _this.pickedWord, _this.turn); });
            _this.resetWordState();
        };
        _this._pickedWord = pickedWord;
        _this._actualWord = "";
        _this._turn = 1;
        _this._actualPosition = 0;
        _this.letterState = [];
        return _this;
    }
    Object.defineProperty(Game.prototype, "pickedWord", {
        get: function () { return this._pickedWord; },
        set: function (word) { this._pickedWord = word; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualWord", {
        get: function () { return this._actualWord; },
        set: function (word) { this._actualWord = word; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "turn", {
        get: function () { return this._turn; },
        set: function (num) { this._turn = num; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "actualPosition", {
        get: function () { return this._actualPosition; },
        set: function (num) { this._actualPosition = num; },
        enumerable: false,
        configurable: true
    });
    Game.prototype.resetWordState = function () {
        this.turn = this.turn + 1;
        this.actualPosition = 0;
        this.actualWord = "";
    };
    Game.prototype.newLetter = function (code) {
        var letterValidator = LetterValidatorFactory.createValidator();
        var letter = letterValidator.transformCodeToLetter(code);
        this.setNewLetter(this.turn, this.actualPosition, letter);
        this._actualPosition += 1;
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
    Game.prototype.newKeyPressed = function (code) {
        var specialKeyPressed;
        var letterValidator = LetterValidatorFactory.createValidator();
        if (letterValidator.isValidLetter(code, this.actualPosition)) {
            this.newLetter(code);
        }
        if (letterValidator.isEnterKey(code)) {
            specialKeyPressed = new EnterPressed(this);
            specialKeyPressed.execute();
        }
        if (letterValidator.isBackspaceKey(code)) {
            specialKeyPressed = new BackspacePressed(this);
            specialKeyPressed.execute();
        }
    };
    return Game;
}(Interface));
export { Game };
