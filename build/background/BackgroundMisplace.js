var BackgroundMisplace = /** @class */ (function () {
    function BackgroundMisplace() {
    }
    BackgroundMisplace.prototype.changeBackgroundPosition = function (turn, position, state) {
        if (state == "misplacedLetter") {
            Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add("cell-orange");
        }
    };
    return BackgroundMisplace;
}());
export { BackgroundMisplace };
