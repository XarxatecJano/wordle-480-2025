var UtilHTML = /** @class */ (function () {
    function UtilHTML() {
    }
    UtilHTML.changeBackgroundCell = function (turn, position, cellColor) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add(cellColor);
    };
    UtilHTML.changeTextContentCell = function (turn, position, text) {
        Array.from(document.getElementById("row_".concat(turn)).children)[position].textContent = text;
    };
    return UtilHTML;
}());
export { UtilHTML };
