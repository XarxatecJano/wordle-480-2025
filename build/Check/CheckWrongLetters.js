import { MAX_WORD_SIZE } from "../env.js";
var CheckWrongLetters = /** @class */ (function () {
    function CheckWrongLetters(interf) {
        var _this = this;
        this.check = function (game) {
            var actualLetter = "";
            var pattern;
            var numberOfCoincidences = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = game.gameLogic.actualWord[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidences = (game.gameLogic.pickedWord.match(pattern) || []).length;
                if (numberOfCoincidences == 0) {
                    _this._interface.changeBackgroundKey(actualLetter, "wrongLetter");
                    game.gameLogic.typeCell.set(i, "wrongLetter");
                }
            }
        };
        this._interface = interf;
    }
    return CheckWrongLetters;
}());
export { CheckWrongLetters };
