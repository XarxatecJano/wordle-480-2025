var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        this.getCell(turn, position).textContent = letter;
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        this.getCell(turn, position).textContent = "";
    };
    Interface.prototype.changeBackgroundPosition = function (turn, position, state) {
        var positionClass = this.changeColorWithState(state);
        this.getCell(turn, position).classList.add(positionClass);
    };
    Interface.prototype.changeBackgroundKey = function (letter, state) {
        var keys = document.getElementsByClassName("key");
        var code;
        if (letter != "Ñ") {
            code = "Key" + letter;
        }
        else {
            code = "Semicolon";
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                var positionClass = this.changeColorWithState(state);
                key.classList.add(positionClass);
            }
        }
    };
    Interface.prototype.getCell = function (turn, position) {
        return Array.from(document.getElementById("row_".concat(turn)).children)[position];
    };
    Interface.prototype.changeColorWithState = function (state) {
        var color = "cell-grey";
        if (state == "rightLetter")
            color = "cell-green";
        if (state == "misplacedLetter")
            color = "cell-orange";
        return color;
    };
    return Interface;
}());
export { Interface };
