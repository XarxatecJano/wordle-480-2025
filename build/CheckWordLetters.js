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
import { Game } from "./Game";
var MAX_WORD_SIZE = 5;
var CheckWordLetters = /** @class */ (function (_super) {
    __extends(CheckWordLetters, _super);
    function CheckWordLetters(pickedWord) {
        var _this = _super.call(this, pickedWord) || this;
        _this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (_this.pickedWord[i] == _this.actualWord[i]) {
                    _this.changeBackgroundPosition(_this.turn, i, "rightLetter");
                }
            }
        };
        _this.checkMisplacedLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = _this.actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (_this.pickedWord.match(pattern) || []).length;
                if (_this.pickedWord[i] == _this.actualWord[i])
                    isMisplacedLetter = false;
                if (numberOfCoincidences > 0 && isMisplacedLetter)
                    _this.changeBackgroundPosition(_this.turn, i, "misplacedLetter");
            }
        };
        _this.checkWrongLetters = function () {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = _this.actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (_this.pickedWord.match(pattern) || []).length;
                if (numberOfCoincidences == 0)
                    _this.changeBackgroundPosition(_this.turn, i, "wrongLetter");
            }
        };
        return _this;
    }
    return CheckWordLetters;
}(Game));
export { CheckWordLetters };
