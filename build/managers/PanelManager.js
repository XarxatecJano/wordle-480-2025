import { UtilHTML } from "../html_css/UtilHTML.js";
var PanelManager = /** @class */ (function () {
    function PanelManager(backgrounds) {
        this._backgrounds = backgrounds;
    }
    PanelManager.prototype.setNewLetter = function (turn, position, letter) {
        if (letter == "Semicolon") {
            letter = "Ñ";
        }
        UtilHTML.changeTextContentCell(turn, position, letter);
    };
    PanelManager.prototype.deleteLetter = function (turn, position) {
        UtilHTML.changeTextContentCell(turn, position, "");
    };
    PanelManager.prototype.changeCellsBackground = function (state, index) {
        this.backgrounds.forEach(function (element) {
            element.changeBackgroundColor(state, index);
        });
    };
    Object.defineProperty(PanelManager.prototype, "backgrounds", {
        get: function () { return this._backgrounds; },
        set: function (value) { this._backgrounds = value; },
        enumerable: false,
        configurable: true
    });
    return PanelManager;
}());
export { PanelManager };
