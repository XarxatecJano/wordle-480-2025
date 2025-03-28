import { SEMICOLON } from "./env.js";
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.transformCodeToLetter = function (code, split) {
        return code.split(split)[1];
    };
    Util.getRandomWord = function (_words) {
        var min = 0;
        var max = _words.length - 1;
        return _words[Math.floor(Math.random() * (max - min + 1))];
    };
    Util.semicolonCheck = function (code) {
        if (code == SEMICOLON) {
            code = "Ñ";
        }
        return code;
    };
    return Util;
}());
export { Util };
