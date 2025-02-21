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
import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface";
var CheckCorrectLetters = /** @class */ (function (_super) {
    __extends(CheckCorrectLetters, _super);
    function CheckCorrectLetters() {
        var _this = _super.call(this) || this;
        _this.check = function (actualWord, pickedWord, turn) {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (pickedWord[i] == actualWord[i]) {
                    _this.changeBackgroundPosition(turn, i, "rightLetter");
                }
            }
        };
        return _this;
    }
    return CheckCorrectLetters;
}(Interface));
export { CheckCorrectLetters };
