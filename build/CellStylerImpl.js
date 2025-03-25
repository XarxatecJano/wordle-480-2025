var CellStylerImpl = /** @class */ (function () {
    function CellStylerImpl(domAccess) {
        this.domAccess = domAccess;
    }
    CellStylerImpl.prototype.getCellElement = function (turn, position) {
        var row = this.domAccess.getELementById("row_".concat(turn));
        if (row) {
            var cells = Array.from(row.children);
            return cells[position] || null;
        }
        return null;
    };
    CellStylerImpl.prototype.applyCellStyle = function (turn, position, state) {
        var styleClass = CellStylerImpl.CLASS_GREY;
        if (state === CellStylerImpl.STATE_RIGHT_LETTER) {
            styleClass = CellStylerImpl.CLASS_GREEN;
        }
        else if (state === CellStylerImpl.STATE_MISPLACED_LETTER) {
            styleClass = CellStylerImpl.CLASS_ORANGE;
        }
        var cell = this.getCellElement(turn, position);
        if (cell) {
            cell.classList.add(styleClass);
        }
    };
    CellStylerImpl.STATE_RIGHT_LETTER = "rightLetter";
    CellStylerImpl.STATE_MISPLACED_LETTER = "misplacedLetter";
    CellStylerImpl.CLASS_GREY = "cell-grey";
    CellStylerImpl.CLASS_GREEN = "cell-green";
    CellStylerImpl.CLASS_ORANGE = "cell-orange";
    return CellStylerImpl;
}());
export { CellStylerImpl };
