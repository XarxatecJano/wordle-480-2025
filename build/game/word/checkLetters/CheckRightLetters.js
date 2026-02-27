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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CheckLetters } from "./CheckLetters.js";
import { KeyState } from "../../../interface/keyboard/KeyState.js";
import { MAX_WORD_SIZE } from "../../../env.js";
var checkRightLetters = /** @class */ (function (_super) {
    __extends(checkRightLetters, _super);
    function checkRightLetters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    checkRightLetters.prototype.check = function (gameState, charCounter) {
        var charCount = __assign({}, charCounter);
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var actualLetter = gameState.actualWord.getLetterAtIndex(i);
            var pickedLetter = gameState.pickedWord.getLetterAtIndex(i);
            if (actualLetter.equals(pickedLetter)) {
                charCount[pickedLetter.getChar()]--;
                this.grid.setLetterState(gameState.turn, i, KeyState.RIGHT);
                this.keyboard.setKeyState(gameState.pickedWord.getLetterAtIndex(i).getCode(), KeyState.RIGHT);
            }
        }
        return charCount;
    };
    return checkRightLetters;
}(CheckLetters));
export { checkRightLetters };
