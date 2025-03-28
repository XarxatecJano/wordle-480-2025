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
import { ENTER, MAX_WORD_SIZE } from "../env.js";
import { Input } from "./Input.js";
var InputEnter = /** @class */ (function (_super) {
    __extends(InputEnter, _super);
    function InputEnter(gameManager, visualManager, wordManager, gameStatusManager, checkTypeManager) {
        var _this = _super.call(this, gameManager, visualManager, wordManager) || this;
        _this._gameStatusManager = gameStatusManager;
        _this._checkTypeManager = checkTypeManager;
        return _this;
    }
    InputEnter.prototype.OnPress = function (code) {
        if (code == ENTER) {
            if (this.wordManager.actualWord().actuallength() == MAX_WORD_SIZE) {
                var wordCheck = new Array(MAX_WORD_SIZE);
                this.checkTypeManager.executeChecks(wordCheck);
                this.visualManager.updateInterface(wordCheck);
                this.visualManager.board.deleteBoardKeyFocus();
                this.gameStatusManager.checkStatus();
                this.wordManager.newEmptyWord();
                this.gameManager.setNewTurn();
            }
        }
    };
    Object.defineProperty(InputEnter.prototype, "gameStatusManager", {
        get: function () { return this._gameStatusManager; },
        set: function (value) { this._gameStatusManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputEnter.prototype, "checkTypeManager", {
        get: function () { return this._checkTypeManager; },
        set: function (value) { this._checkTypeManager = value; },
        enumerable: false,
        configurable: true
    });
    return InputEnter;
}(Input));
export { InputEnter };
