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
import { BACKESPACE } from "../env.js";
import { Input } from "./Input.js";
var InputBack = /** @class */ (function (_super) {
    __extends(InputBack, _super);
    function InputBack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBack.prototype.OnPress = function (code) {
        if (code == BACKESPACE) {
            if (this.wordManager.actualWord().actuallength() > 0) {
                var words = this.wordManager.allLetters();
                var letter = this.wordManager.actualWord().actualLetter();
                this.visualManager.board.deleteBoardKeyBackground(letter, words);
                this.visualManager.panel.deleteLetter(this.gameManager.turn + 1, this.gameManager.position - 1);
                this.wordManager.actualWord().removeLetter();
                this.gameManager.removePosition();
            }
        }
    };
    return InputBack;
}(Input));
export { InputBack };
