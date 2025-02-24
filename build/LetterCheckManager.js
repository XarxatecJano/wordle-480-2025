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
import { Interface } from "./Interface";
var LetterCheckManager = /** @class */ (function (_super) {
    __extends(LetterCheckManager, _super);
    function LetterCheckManager() {
        var _this = _super.call(this) || this;
        _this.strategies = [];
        return _this;
    }
    LetterCheckManager.prototype.addStrategy = function (strategy) {
        this.strategies.push(strategy);
    };
    LetterCheckManager.prototype.executeStrategies = function (actualWord, pickedWord, turn) {
        this.strategies.forEach(function (strategy) {
            strategy.check(actualWord, pickedWord, turn);
        });
    };
    return LetterCheckManager;
}(Interface));
export { LetterCheckManager };
