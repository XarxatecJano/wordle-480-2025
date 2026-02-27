var ObservableInputEnter = /** @class */ (function () {
    function ObservableInputEnter() {
        this.inputs = [];
    }
    ObservableInputEnter.prototype.attach = function (object) {
        this.inputs.push(object);
    };
    ObservableInputEnter.prototype.detach = function (object) {
        this.inputs.pop();
    };
    ObservableInputEnter.prototype.notify = function () {
        this.inputs.forEach(function (element) {
            element.update();
        });
    };
    return ObservableInputEnter;
}());
export { ObservableInputEnter };
