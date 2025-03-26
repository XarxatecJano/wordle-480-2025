import { GridUI } from "./GridUI.js";
import { KeyboardUI } from "./KeyboardUI.js";
var GameUI = /** @class */ (function () {
    function GameUI() {
        this.gridUI = new GridUI();
        this.keyboard = new KeyboardUI();
    }
    GameUI.prototype.setNewLetter = function (turn, position, letter) {
        this.gridUI.setNewLetter(turn, position, letter);
    };
    GameUI.prototype.deleteLetter = function (turn, position) {
        this.gridUI.deleteLetter(turn, position);
    };
    GameUI.prototype.changeCellColor = function (turn, position, state) {
        this.gridUI.changeCellColor(turn, position, state);
    };
    GameUI.prototype.changeKeyColor = function (code) {
        this.keyboard.changeKeyColor(code);
    };
    return GameUI;
}());
export { GameUI };
