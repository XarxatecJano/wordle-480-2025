import { MAX_WORD_SIZE } from "../env.js";
var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interf) {
        var _this = this;
        this.check = function (game) {
            var actualLetter = "";
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = game.actualWord[i];
                _this.changeColorDependingOnCoincidences(i, actualLetter, game);
            }
        };
        this._interface = interf;
    }
    CheckMisplacedLetters.prototype.changeColorDependingOnCoincidences = function (actualPosition, actualLetter, game) {
        var _a, _b, _c;
        var numberOfCoincidences = this.getNumberOfCoincidences(game.pickedWord, actualLetter);
        console.log(game.rightPositionLetters.get(actualLetter));
        console.log(game.misplacedPositionLetters.get(actualLetter));
        if (((_a = game.rightPositionLetters.get(actualLetter)) !== null && _a !== void 0 ? _a : 0) + ((_b = game.misplacedPositionLetters.get(actualLetter)) !== null && _b !== void 0 ? _b : 0) <= numberOfCoincidences) {
            for (var i = 0; i < numberOfCoincidences; i++) {
                this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
                game.misplacedPositionLetters.set(game.actualWord[i], ((_c = game.misplacedPositionLetters.get(actualLetter)) !== null && _c !== void 0 ? _c : 0) + 1);
                game.typeCell.set(actualPosition, "misplacedLetter");
            }
        }
        else {
            if (!game.typeCell.get(actualPosition)) {
                game.typeCell.set(actualPosition, "wrongLetter");
            }
        }
    };
    CheckMisplacedLetters.prototype.getNumberOfCoincidences = function (word, actualLetter) {
        var pattern = new RegExp(actualLetter, "g");
        return (word.match(pattern) || []).length;
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
