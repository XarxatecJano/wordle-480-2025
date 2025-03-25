var LetterDisplayImpl = /** @class */ (function () {
    function LetterDisplayImpl(domAcces) {
        this.domAccess = domAcces;
    }
    LetterDisplayImpl.prototype.getCellElement = function (turn, position) {
        var row = this.domAccess.getELementById("row_".concat(turn));
        if (row) {
            var cells = Array.from(row.children);
            return cells[position] || null;
        }
        return null;
    };
    LetterDisplayImpl.prototype.setLetter = function (turn, position, letter) {
        var cell = this.getCellElement(turn, position);
        if (cell) {
            cell.textContent = letter;
        }
    };
    LetterDisplayImpl.prototype.clearLetter = function (turn, position) {
        var cell = this.getCellElement(turn, position);
        if (cell) {
            cell.textContent = "";
        }
    };
    return LetterDisplayImpl;
}());
export { LetterDisplayImpl };
