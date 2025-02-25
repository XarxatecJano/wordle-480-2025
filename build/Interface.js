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
        var positionClass = "cell-grey";
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        this.getCell(turn, position).classList.add(positionClass);
    };
    Interface.prototype.changeBackgroundKey = function (letter, state) {
        var keys = document.getElementsByClassName("key");
        var code = "Key" + letter;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                var positionClass = "cell-grey";
                if (state == "rightLetter")
                    positionClass = "cell-green";
                if (state == "misplacedLetter")
                    positionClass = "cell-orange";
                key.classList.add(positionClass);
            }
        }
    };
    Interface.prototype.getCell = function (turn, position) {
        return Array.from(document.getElementById("row_".concat(turn)).children)[position];
    };
    return Interface;
}());
export { Interface };
