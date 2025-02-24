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
import { Game } from "./Game.js";
var WordChecker = /** @class */ (function (_super) {
    __extends(WordChecker, _super);
    function WordChecker(strategies) {
        var _this = _super.call(this, "") || this;
        _this._strategies = strategies;
        return _this;
    }
    WordChecker.prototype.checkAll = function (game) {
        this._strategies.forEach(function (strategy) { return strategy.check(game.actualWord, game.pickedWord, game.turn); });
        game.turn += 1;
        game.actualPosition = 0;
        game.actualWord = "";
    };
    return WordChecker;
}(Game));
export { WordChecker };
