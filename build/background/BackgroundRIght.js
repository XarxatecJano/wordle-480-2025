var BackgroundRight = /** @class */ (function () {
    function BackgroundRight() {
    }
    BackgroundRight.prototype.changeBackgroundPosition = function (turn, position, state) {
        if (state == "rightLetter") {
            Array.from(document.getElementById("row_".concat(turn)).children)[position].classList.add("cell-green");
        }
    };
    return BackgroundRight;
}());
export { BackgroundRight };
