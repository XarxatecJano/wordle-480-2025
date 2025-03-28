var PanelBackground = /** @class */ (function () {
    function PanelBackground(gameManager) {
        this._gameManager = gameManager;
    }
    Object.defineProperty(PanelBackground.prototype, "gameManager", {
        get: function () { return this._gameManager; },
        set: function (value) { this._gameManager = value; },
        enumerable: false,
        configurable: true
    });
    return PanelBackground;
}());
export { PanelBackground };
