var CheckTypeManager = /** @class */ (function () {
    function CheckTypeManager(checks) {
        this._checks = checks;
    }
    CheckTypeManager.prototype.executeChecks = function (word) {
        this.checks.forEach(function (element) { element.check(word); });
    };
    Object.defineProperty(CheckTypeManager.prototype, "checks", {
        get: function () { return this._checks; },
        set: function (value) { this._checks = value; },
        enumerable: false,
        configurable: true
    });
    return CheckTypeManager;
}());
export { CheckTypeManager };
