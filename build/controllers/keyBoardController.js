import { Checker } from "./Checker";
import { MAX_WORD_SIZE } from "../core/env";
import { Interface } from "../core/Interface";
import { UpdateManager } from "./UpdateManager.js";
import { Letter } from "./Letter.js";
import { PositionManager } from "./PositionManager.js";
var KeyBoardController = /** @class */ (function () {
    function KeyBoardController(pickedWord) {
        this._checker = Checker.getInstance(pickedWord);
        this._letterManager = Letter.getInstance();
        this._interface = new Interface;
        this._positionManager = PositionManager.getInstance();
        this._updateElementsManager = UpdateManager.getInstance(this._checker);
    }
    KeyBoardController.prototype.newLetter = function (code) {
        var letter = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this._checker.turn, this._positionManager.currentPosition, letter);
        this._positionManager.nextPosition();
        this._checker.actualWord += letter;
    };
    KeyBoardController.prototype.enterPressed = function () {
        if (this._checker.actualWord.length == MAX_WORD_SIZE) {
            this._checker.checkWordIsRight();
            this._checker.checkGameIsOver();
            this._updateElementsManager.updateAfterNewWord();
        }
    };
    KeyBoardController.prototype.backspacePressed = function () {
        if (this._positionManager.currentPosition > 0) {
            this._positionManager.currentPosition -= 1;
            this._checker.actualWord = this._checker.actualWord.slice(0, this._checker.actualWord.length - 1);
            this._interface.deleteLetter(this._checker.turn, this._positionManager.currentPosition);
        }
    };
    KeyBoardController.prototype.setNewKey = function (code) {
        if (this._letterManager.isValidLetter(code) && this._positionManager.currentPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (this._letterManager.isEnterKey(code))
            this.enterPressed();
        if (this._letterManager.isBackspaceKey(code))
            this.backspacePressed();
    };
    return KeyBoardController;
}());
export { KeyBoardController };
