import { UtilHTML } from "../html_css/UtilHTML.js";
var Panel = /** @class */ (function () {
    function Panel(backgrounds) {
        this._backgrounds = backgrounds;
    }
    Panel.prototype.setNewLetter = function (turn, position, letter) {
        if (letter == "Semicolon") {
            letter = "Ñ";
        }
        UtilHTML.changeTextContentCell(turn, position, letter);
    };
    Panel.prototype.deleteLetter = function (turn, position) {
        UtilHTML.changeTextContentCell(turn, position, "");
    };
    Panel.prototype.changeCellsBackground = function (state, index) {
        this.backgrounds.forEach(function (element) {
            element.changeBackgroundColor(state, index);
        });
    };
    Object.defineProperty(Panel.prototype, "backgrounds", {
        get: function () { return this._backgrounds; },
        set: function (value) { this._backgrounds = value; },
        enumerable: false,
        configurable: true
    });
    return Panel;
}());
export { Panel };
