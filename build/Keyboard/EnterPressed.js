import { MAX_WORD_SIZE } from "../env.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        if (this._game.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this._game.updateAfterANewWord();
        }
    };
    return EnterPressed;
}());
export { EnterPressed };
