import { GameLogic } from "../Game/GameLogic.js";
export var MAX_ATTEMPTS = 6;
var CheckLoser = /** @class */ (function () {
    function CheckLoser(pickedWord) {
        this._game = GameLogic.getInstance(pickedWord);
    }
    CheckLoser.prototype.check = function () {
        return this._game.turn === MAX_ATTEMPTS && this._game.actualWord !== this._game.pickedWord;
    };
    return CheckLoser;
}());
export { CheckLoser };
