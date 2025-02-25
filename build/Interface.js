var STATE_CLASSES = {
    rightLetter: "cell-green",
    misplacedLetter: "cell-orange",
    default: "cell-grey",
};
var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        var cell = this.getCell(turn, position);
        if (cell)
            cell.textContent = letter;
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        var cell = this.getCell(turn, position);
        if (cell)
            cell.textContent = "";
    };
    Interface.prototype.changeBackgroundPosition = function (turn, position, state) {
        var cell = this.getCell(turn, position);
        if (!cell)
            return;
        cell.classList.add(STATE_CLASSES[state] || STATE_CLASSES.default);
    };
    Interface.prototype.changeBackgroundKey = function (code, state) {
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add(STATE_CLASSES[state]);
            }
        }
    };
    Interface.prototype.getCell = function (turn, position) {
        var _a;
        return (_a = document.getElementById("row_".concat(turn))) === null || _a === void 0 ? void 0 : _a.children[position];
    };
    return Interface;
}());
export { Interface };
