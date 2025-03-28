import { LOCATION_WIN } from "../env.js";
var GameStatusWin = /** @class */ (function () {
    function GameStatusWin(wordManager, game) {
        this._wordManager = wordManager;
        this._gameManager = game;
    }
    GameStatusWin.prototype.setStatus = function () {
        if (this.wordManager.sameWord()) {
            location.assign(LOCATION_WIN);
        }
    };
    Object.defineProperty(GameStatusWin.prototype, "wordManager", {
        get: function () { return this._wordManager; },
        set: function (value) { this._wordManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameStatusWin.prototype, "game", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    return GameStatusWin;
}());
export { GameStatusWin };
