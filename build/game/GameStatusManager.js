var GameStatusManager = /** @class */ (function () {
    function GameStatusManager(gameStatus) {
        this._gameStatus = gameStatus;
    }
    GameStatusManager.prototype.checkStatus = function () {
        this.gameStatus.forEach(function (element) {
            element.setStatus();
        });
    };
    Object.defineProperty(GameStatusManager.prototype, "gameStatus", {
        get: function () { return this._gameStatus; },
        set: function (value) { this._gameStatus = value; },
        enumerable: false,
        configurable: true
    });
    return GameStatusManager;
}());
export { GameStatusManager };
