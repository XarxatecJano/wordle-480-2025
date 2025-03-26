var GridUI = /** @class */ (function () {
    function GridUI() {
    }
    GridUI.prototype.setNewLetter = function (turn, position, letter) {
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            var cell = row.children[position];
            if (cell) {
                cell.textContent = letter;
            }
        }
    };
    GridUI.prototype.deleteLetter = function (turn, position) {
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            var cell = row.children[position];
            if (cell) {
                cell.textContent = "";
            }
        }
    };
    GridUI.prototype.changeCellColor = function (turn, position, state) {
        var cssClass = "cell-grey";
        if (state === "rightLetter")
            cssClass = "cell-green";
        if (state === "misplacedLetter")
            cssClass = "cell-orange";
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            var cell = row.children[position];
            if (cell) {
                cell.classList.add(cssClass);
            }
        }
    };
    return GridUI;
}());
export { GridUI };
