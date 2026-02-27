var ListenerManager = /** @class */ (function () {
    function ListenerManager(inputs) {
        this._inputs = inputs;
    }
    ListenerManager.prototype.setListeners = function () {
        var _this = this;
        Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
            _this.inputs.forEach(function (element) {
                element.OnPress(e.target.value);
            });
        }); });
        document.addEventListener("keydown", function (e) {
            _this.inputs.forEach(function (element) {
                element.OnPress(e.code);
            });
        });
    };
    Object.defineProperty(ListenerManager.prototype, "inputs", {
        get: function () { return this._inputs; },
        set: function (value) { this._inputs = value; },
        enumerable: false,
        configurable: true
    });
    return ListenerManager;
}());
export { ListenerManager };
