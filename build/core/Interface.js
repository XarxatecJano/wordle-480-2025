var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = letter;
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = "";
    };
    Interface.prototype.changeCheckedBackground = function (turn, letterIndex, state, actualWord) {
        this.changeBackgroundPosition(turn, letterIndex, state);
        this.changeBackgroundKey(actualWord, state);
    };
    Interface.prototype.setElementState = function (state) {
        var elementClass = "cell-grey";
        if (state == "rightLetter")
            elementClass = "cell-green";
        if (state == "misplacedLetter")
            elementClass = "cell-orange";
        return elementClass;
    };
    Interface.prototype.changeBackgroundPosition = function (turn, position, state) {
        var positionClass = this.setElementState(state);
        Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add(positionClass);
    };
    Interface.prototype.changeBackgroundKey = function (code, state) {
        code = "Key" + code;
        var positionClass = this.setElementState(state);
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code) {
                if (state == "rightLetter")
                    key.classList.remove("cell-orange");
                key.classList.add(positionClass);
            }
        }
    };
    return Interface;
}());
export { Interface };
