import { MAX_WORD_SIZE } from "../env.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        var _this = this;
        if (this._game.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this._game.actualWord.split("").forEach(function (letter) {
                _this._game.changeBackgroundKey(letter);
            });
            this._game.updateAfterANewWord();
        }
    };
    return EnterPressed;
}());
export { EnterPressed };
