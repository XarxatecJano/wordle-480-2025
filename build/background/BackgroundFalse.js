var BackgroundFalse = /** @class */ (function () {
    function BackgroundFalse() {
    }
    BackgroundFalse.prototype.changeBackgroundPosition = function (turn, position, state) {
        if (state == "falseLetter") {
            Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add("cell-grey");
        }
    };
    return BackgroundFalse;
}());
export { BackgroundFalse };
