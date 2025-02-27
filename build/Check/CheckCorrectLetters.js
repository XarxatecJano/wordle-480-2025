import { MAX_WORD_SIZE } from "../env.js";
var CheckCorrectLetters = /** @class */ (function () {
    function CheckCorrectLetters(interf) {
        var _this = this;
        this.check = function (game) {
            var _a;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                if (game.gameLogic.pickedWord[i] == game.gameLogic.actualWord[i]) {
                    _this._interface.changeBackgroundPosition(game.gameLogic.turn, i, "rightLetter");
                    _this._interface.changeBackgroundKey(game.gameLogic.pickedWord[i], "rightLetter");
                    game.gameLogic.rightPositionLetters.set(game.gameLogic.actualWord[i], ((_a = game.gameLogic.rightPositionLetters.get(game.gameLogic.actualWord[i])) !== null && _a !== void 0 ? _a : 0) + 1);
                    game.gameLogic.typeCell.set(i, "rightLetter");
                }
            }
        };
        this._interface = interf;
    }
    return CheckCorrectLetters;
}());
export { CheckCorrectLetters };
