import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "./Letter.js";
import { Checker } from "./Checker.js";
import { UpdateManager } from "./UpdateManager.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._checker = new Checker(pickedWord);
        this._validLetterCodes = new Letter();
        this._interface = new Interface();
        this._updateElementsManager = new UpdateManager(this._checker);
    }
    Game.getInstance = function (pickedWord) {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    };
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
    Game.prototype.isEnterKey = function (code) {
        return code == "Enter";
    };
    Game.prototype.isBackspaceKey = function (code) {
        return code == "Backspace";
    };
    Game.prototype.newLetter = function (code) {
        var letter = this._validLetterCodes.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.actualPosition, letter);
        this._updateElementsManager.aumentarPosicion();
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
        if (this.checker.actualPosition > 0) {
            this.checker.actualPosition -= 1;
            this._interface.resetBackgroundKeys(this.checker.actualWord, this.checker.actualLetters);
            this.checker.actualWord = this.checker.actualWord.slice(0, this.checker.actualWord.length - 1);
            this._interface.deleteLetter(this.checker.turn, this.checker.actualPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this._checker.isValidLetter(code) && this.checker.actualPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
            this._interface.changeBackgroundKey(code);
        }
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
    };
    return Game;
}());
export { Game };
