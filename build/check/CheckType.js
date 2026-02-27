var CheckType = /** @class */ (function () {
    function CheckType(wordManager) {
        this._wordManager = wordManager;
    }
    Object.defineProperty(CheckType.prototype, "wordManager", {
        get: function () { return this._wordManager; },
        set: function (value) { this._wordManager = value; },
        enumerable: false,
        configurable: true
    });
    return CheckType;
}());
export { CheckType };
