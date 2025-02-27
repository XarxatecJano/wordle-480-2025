import { MAX_WORD_SIZE } from "../env.js";
var CheckCorrectLetters = /** @class */ (function () {
    function CheckCorrectLetters(interf) {
        var _this = this;
        this.check = function (game) {
            var _a;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (game.pickedWord[i] == game.actualWord[i]) {
                    _this._interface.changeBackgroundPosition(game.turn, i, "rightLetter");
                    _this._interface.changeBackgroundKey(game.pickedWord[i], "rightLetter");
                    game.rightPositionLetters.set(game.actualWord[i], ((_a = game.rightPositionLetters.get(game.actualWord[i])) !== null && _a !== void 0 ? _a : 1) + 1);
                    game.typeCell.set(i, "rightLetter");
                }
            }
        };
        this._interface = interf;
    }
    return CheckCorrectLetters;
}());
export { CheckCorrectLetters };
