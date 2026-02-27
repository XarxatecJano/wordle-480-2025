import { LOCATION_GAME_OVER, MAX_ATTEMPTS } from "../env.js";
var GameStatusLose = /** @class */ (function () {
    function GameStatusLose(game) {
        this._gameManager = game;
    }
    GameStatusLose.prototype.setStatus = function () {
        if (this.game.turn + 1 >= MAX_ATTEMPTS) {
            location.assign(LOCATION_GAME_OVER);
        }
    };
    Object.defineProperty(GameStatusLose.prototype, "game", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    return GameStatusLose;
}());
export { GameStatusLose };
