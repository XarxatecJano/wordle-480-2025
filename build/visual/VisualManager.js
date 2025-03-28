import { WRONG_WORD, MISPLACE_LETTER, RIGHT_WORD, RIGHT, MISPLACE, WRONG } from "../env.js";
var VisualManager = /** @class */ (function () {
    function VisualManager(panel, board) {
        this._panel = panel;
        this._board = board;
    }
    VisualManager.prototype.updateInterface = function (word) {
        for (var i = 0; i < word.length; i++) {
            var type = word[i];
            if (type == RIGHT) {
                this.panel.changeCellsBackground(RIGHT_WORD, i);
            }
            else if (type == MISPLACE) {
                this.panel.changeCellsBackground(MISPLACE_LETTER, i);
            }
            else if (type == WRONG) {
                this.panel.changeCellsBackground(WRONG_WORD, i);
            }
        }
    };
    Object.defineProperty(VisualManager.prototype, "panel", {
        get: function () { return this._panel; },
        set: function (value) { this._panel = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualManager.prototype, "board", {
        get: function () { return this._board; },
        set: function (value) { this._board = value; },
        enumerable: false,
        configurable: true
    });
    return VisualManager;
}());
export { VisualManager };
