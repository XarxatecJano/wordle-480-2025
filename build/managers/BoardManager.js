import { SEMICOLON } from "../env.js";
import { UtilCSS } from "../html_css/UtilCSS.js";
import { Util } from "../util.js";
var BoardManager = /** @class */ (function () {
    function BoardManager() {
    }
    BoardManager.prototype.setBoardKeyBackground = function (code) {
        var keys = document.getElementsByClassName("key");
        var letter = "";
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (code == SEMICOLON) {
                letter = key.value;
            }
            else {
                letter = Util.transformCodeToLetter(key.value, "y");
            }
            if (letter == code) {
                UtilCSS.addClass(key, "keyPressed");
            }
        }
    };
    BoardManager.prototype.deleteBoardKeyBackground = function (code, letters) {
        var keys = document.getElementsByClassName("key");
        var coincidences = 0;
        for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
            var letter = letters_1[_i];
            if (letter == code) {
                coincidences++;
            }
        }
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var key = keys_2[_a];
            code = Util.semicolonCheck(code);
            if (key.textContent == code && coincidences <= 1) {
                UtilCSS.removeClass(key, "keyPressed");
            }
        }
    };
    BoardManager.prototype.deleteBoardKeyFocus = function () {
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var key = keys_3[_i];
            UtilCSS.removeFocus(key);
        }
    };
    return BoardManager;
}());
export { BoardManager };
