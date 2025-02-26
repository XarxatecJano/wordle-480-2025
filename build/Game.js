import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "./Letter.js";
import { Checker } from "./Checker.js";
import { UpdateManager } from "./UpdateManager.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._checker = Checker.getInstance(pickedWord);
        this._letterManager = Letter.getInstance();
        this._interface = new Interface();
        this._updateElementsManager = UpdateManager.getInstance(this._checker);
    }
    Object.defineProperty(Game.prototype, "checker", {
        get: function () {
            return this._checker;
        },
        set: function (checker) {
            this._checker = checker;
        },
        enumerable: false,
        configurable: true
    });
    Game.getInstance = function (pickedWord) {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    };
    Game.prototype.newLetter = function (code) {
        var letter = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.currentPosition, letter);
        this._updateElementsManager.nextPosition();
        this.checker.actualWord += letter;
    };
    Game.prototype.enterPressed = function () {
        if (this.checker.actualWord.length == MAX_WORD_SIZE) {
            this.checker.checkWordIsRight();
            this.checker.checkGameIsOver();
            this._updateElementsManager.updateAfterNewWord();
        }
    };
    Game.prototype.backspacePressed = function () {
        if (this.checker.currentPosition > 0) {
            this.checker.currentPosition -= 1;
            this.checker.actualWord = this.checker.actualWord.slice(0, this.checker.actualWord.length - 1);
            this._interface.deleteLetter(this.checker.turn, this.checker.currentPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this._checker.isValidLetter(code) && this.checker.currentPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (this._letterManager.isEnterKey(code))
            this.enterPressed();
        if (this._letterManager.isBackspaceKey(code))
            this.backspacePressed();
    };
    return Game;
}());
export { Game };
