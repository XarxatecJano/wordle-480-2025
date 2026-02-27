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
import { Interface } from "./Interface.js";
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic(pickedWord) {
        var _this = _super.call(this) || this;
        _this._pickedWord = pickedWord;
        _this._actualWord = "";
        _this._turn = 1;
        _this._actualPosition = 0;
        return _this;
    }
    Object.defineProperty(GameLogic.prototype, "pickedWord", {
        get: function () { return this._pickedWord; },
        set: function (word) { this._pickedWord = word; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "actualWord", {
        get: function () { return this._actualWord; },
        set: function (word) { this._actualWord = word; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "turn", {
        get: function () { return this._turn; },
        set: function (num) { this._turn = num; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "actualPosition", {
        get: function () { return this._actualPosition; },
        set: function (num) { this._actualPosition = num; },
        enumerable: false,
        configurable: true
    });
    GameLogic.getInstance = function (pickedWord) {
        if (!GameLogic.instance) {
            GameLogic.instance = new GameLogic(pickedWord);
        }
        return GameLogic.instance;
    };
    return GameLogic;
}(Interface));
export { GameLogic };
