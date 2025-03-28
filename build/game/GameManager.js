var GameManager = /** @class */ (function () {
    function GameManager() {
        this._turn = 0;
        this._position = 0;
    }
    GameManager.prototype.setNewTurn = function () {
        this.addTurn();
        this.resetPosition();
    };
    GameManager.prototype.addTurn = function () { this.turn++; };
    GameManager.prototype.addPosition = function () { this.position++; };
    GameManager.prototype.removePosition = function () { if (this.position > 0)
        this.position--; };
    GameManager.prototype.resetPosition = function () { this._position = 0; };
    Object.defineProperty(GameManager.prototype, "turn", {
        get: function () { return this._turn; },
        set: function (value) { this._turn = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameManager.prototype, "position", {
        get: function () { return this._position; },
        set: function (value) { this._position = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameManager.prototype, "status", {
        get: function () { return "turn => " + this.turn + " / position => " + this.position; },
        enumerable: false,
        configurable: true
    });
    return GameManager;
}());
export { GameManager };
