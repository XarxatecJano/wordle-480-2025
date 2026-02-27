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
import { MAX_WORD_SIZE, SEMICOLON } from "../env.js";
import { Util } from "../util.js";
import { Input } from "./Input.js";
var InputKey = /** @class */ (function (_super) {
    __extends(InputKey, _super);
    function InputKey(validLetterCodes, gameManager, visualManager, wordManager) {
        var _this = _super.call(this, gameManager, visualManager, wordManager) || this;
        _this._validLetterCodes = validLetterCodes;
        return _this;
    }
    InputKey.prototype.OnPress = function (code) {
        if (this._validLetterCodes.includes(code)) {
            if (code != SEMICOLON) {
                code = Util.transformCodeToLetter(code, "y");
            }
            if (this.wordManager.actualWord().actuallength() < MAX_WORD_SIZE) {
                this.wordManager.actualWord().addLetter(code);
                this.gameManager.addPosition();
                this.visualManager.panel.setNewLetter(this.gameManager.turn + 1, this.wordManager.actualWordLength() - 1, code);
                this.visualManager.board.setBoardKeyBackground(code);
            }
        }
    };
    return InputKey;
}(Input));
export { InputKey };
