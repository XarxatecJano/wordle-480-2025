var Input = /** @class */ (function () {
    function Input(gameManager, visualManager, wordManager) {
        this._gameManager = gameManager;
        this._visualManager = visualManager;
        this._wordManager = wordManager;
    }
    Object.defineProperty(Input.prototype, "gameManager", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "visualManager", {
        get: function () { return this._visualManager; },
        set: function (value) { this._visualManager = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "wordManager", {
        get: function () { return this._wordManager; },
        set: function (value) { this._wordManager = value; },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
export { Input };
