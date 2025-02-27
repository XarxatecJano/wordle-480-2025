import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "../controllers/Letter.js";
import { Checker } from "../controllers/Checker.js";
import { UpdateManager } from "../controllers/UpdateManager.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._checker = Checker.getInstance(pickedWord);
        this._letterManager = Letter.getInstance();
        this._interface = new Interface();
        this._updateElementsManager = UpdateManager.getInstance(this._checker);
    }
    Game.getInstance = function (pickedWord) {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    };
    Game.prototype.newLetter = function (code) {
        var letter = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this._checker.turn, this._checker.currentPosition, letter);
        this._updateElementsManager.nextPosition();
        this._checker.actualWord += letter;
    };
    Game.prototype.enterPressed = function () {
        if (this._checker.actualWord.length == MAX_WORD_SIZE) {
            this._checker.checkWordIsRight();
            this._checker.checkGameIsOver();
            this._updateElementsManager.updateAfterNewWord();
        }
    };
    Game.prototype.backspacePressed = function () {
        if (this._checker.currentPosition > 0) {
            this._checker.currentPosition -= 1;
            this._checker.actualWord = this._checker.actualWord.slice(0, this._checker.actualWord.length - 1);
            this._interface.deleteLetter(this._checker.turn, this._checker.currentPosition);
        }
    };
    Game.prototype.newKeyPressed = function (code) {
        if (this._checker.isValidLetter(code) && this._checker.currentPosition < MAX_WORD_SIZE) {
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
