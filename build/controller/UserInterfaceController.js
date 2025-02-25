import { KeyType } from "../enum/KeyType.js";
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
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add(positionClass);
    };
    UserInterfaceController.prototype.changeKeyboardElementBackground = function (code, state) {
        var positionClass = "cell-grey";
        if (state == KeyType.RIGHT)
            positionClass = "cell-green";
        if (state == KeyType.MISPLACED)
            positionClass = "cell-orange";
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add(positionClass);
            }
        }
    };
    return UserInterfaceController;
}());
export { UserInterfaceController };
