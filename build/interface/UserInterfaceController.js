import { KeyState } from "./keyboard/KeyState.js";
var UserInterfaceController = /** @class */ (function () {
    function UserInterfaceController() {
        this.keys = document.getElementsByClassName("key");
    }
    UserInterfaceController.prototype.setNewLetter = function (turn, position, letter) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = letter;
    };
    UserInterfaceController.prototype.deleteLetter = function (turn, position) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = "";
    };
    UserInterfaceController.prototype.changeGridCellLetter = function (turn, position, state) {
        var positionClass = "cell-grey";
        if (state == KeyState.RIGHT)
            positionClass = "cell-green";
        if (state == KeyState.MISPLACED)
            positionClass = "cell-orange";
        Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add(positionClass);
    };
    UserInterfaceController.prototype.changeKeyboardElementBackground = function (code, state) {
        var positionClass = "cell-grey";
        if (state == KeyState.RIGHT)
            positionClass = "cell-green";
        if (state == KeyState.MISPLACED)
            positionClass = "cell-orange";
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.remove("cell-grey", "cell-green", "cell-orange");
                key.classList.add(positionClass);
            }
        }
    };
    return UserInterfaceController;
}());
export { UserInterfaceController };
