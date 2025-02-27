import { MAX_WORD_SIZE } from "../env.js";
var CheckMisplacedLetters = /** @class */ (function () {
    function CheckMisplacedLetters(interf) {
        var _this = this;
        this.check = function (game) {
            var actualLetter = "";
            var isMisplacedLetter;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = game.gameLogic.actualWord[i];
                if (!game.gameLogic.typeCell.get(i)) {
                    _this.changeColorDependingOnCoincidences(i, actualLetter, game);
                }
            }
        };
        this._interface = interf;
    }
    CheckMisplacedLetters.prototype.changeColorDependingOnCoincidences = function (actualPosition, actualLetter, game) {
        var _a, _b, _c;
        var numberOfCoincidences = this.getNumberOfCoincidences(game.gameLogic.pickedWord, actualLetter);
        var numberOfApparitions = ((_a = game.gameLogic.rightPositionLetters.get(actualLetter)) !== null && _a !== void 0 ? _a : 0) + ((_b = game.gameLogic.misplacedPositionLetters.get(actualLetter)) !== null && _b !== void 0 ? _b : 0);
        if (numberOfApparitions < numberOfCoincidences) {
            this._interface.changeBackgroundKey(actualLetter, "misplacedLetter");
            game.gameLogic.misplacedPositionLetters.set(actualLetter, ((_c = game.gameLogic.misplacedPositionLetters.get(actualLetter)) !== null && _c !== void 0 ? _c : 0) + 1);
            game.gameLogic.typeCell.set(actualPosition, "misplacedLetter");
        }
        else {
            game.gameLogic.typeCell.set(actualPosition, "wrongLetter");
        }
    };
    CheckMisplacedLetters.prototype.getNumberOfCoincidences = function (word, actualLetter) {
        var pattern = new RegExp(actualLetter, "g");
        return (word.match(pattern) || []).length;
    };
    return CheckMisplacedLetters;
}());
export { CheckMisplacedLetters };
