import { GameLogic } from "../Game/GameLogic.js";
var CheckWordIsRight = /** @class */ (function () {
    function CheckWordIsRight(pickedWord) {
        this._game = GameLogic.getInstance(pickedWord);
    }
    CheckWordIsRight.prototype.check = function () {
        return this._game.actualWord === this._game.pickedWord;
    };
    return CheckWordIsRight;
}());
export { CheckWordIsRight };
