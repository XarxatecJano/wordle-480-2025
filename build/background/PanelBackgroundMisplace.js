var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { MISPLACE_CELL_CSS, MISPLACE_LETTER } from "../env.js";
import { UtilHTML } from "../html_css/UtilHTML.js";
import { PanelBackground } from "./PanelBackground.js";
var PanelBackgroundMisplace = /** @class */ (function (_super) {
    __extends(PanelBackgroundMisplace, _super);
    function PanelBackgroundMisplace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBackgroundMisplace.prototype.changeBackgroundColor = function (state, index) {
        if (state == MISPLACE_LETTER) {
            UtilHTML.changeBackgroundCell(this.gameManager.turn + 1, index, MISPLACE_CELL_CSS);
        }
    };
    return PanelBackgroundMisplace;
}(PanelBackground));
export { PanelBackgroundMisplace };
