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
import { MAX_WORD_SIZE, RIGHT } from "../env.js";
import { CheckType } from "./CheckType.js";
var CheckTypeRight = /** @class */ (function (_super) {
    __extends(CheckTypeRight, _super);
    function CheckTypeRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckTypeRight.prototype.check = function (wordCheck) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (this.wordManager.sameLetter(i)) {
                wordCheck[i] = RIGHT;
            }
        }
        return wordCheck;
    };
    return CheckTypeRight;
}(CheckType));
export { CheckTypeRight };
