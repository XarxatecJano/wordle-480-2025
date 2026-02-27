var ObservableInput = /** @class */ (function () {
    function ObservableInput() {
        this.observers = [];
    }
    ObservableInput.prototype.action = function () {
        this.notify();
    };
    ObservableInput.prototype.attach = function (o) {
        this.observers.push(o);
    };
    ObservableInput.prototype.detach = function (o) {
        this.observers.pop();
    };
    ObservableInput.prototype.notify = function () {
        this.observers.forEach(function (element) {
            element.update();
        });
    };
    return ObservableInput;
}());
export { ObservableInput };
