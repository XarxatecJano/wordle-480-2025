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
import { Interface } from "../Interface.js";
import { CheckLoser } from "../Check/CheckLoser.js";
import { CheckWordIsRight } from "../Check/CheckWordIsRight.js";
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic(pickedWord) {
        var _this = _super.call(this) || this;
        _this._pickedWord = pickedWord;
        _this._actualWord = "";
        _this._turn = 1;
        _this._actualPosition = 0;
        _this._rightPositionLetters = new Map();
        _this._misplacedPositionLetters = new Map();
        _this._typeCell = new Map();
        return _this;
    }
    Object.defineProperty(GameLogic.prototype, "pickedWord", {
        get: function () {
            return this._pickedWord;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "actualWord", {
        get: function () {
            return this._actualWord;
        },
        set: function (word) {
            this._actualWord = word;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (num) {
            this._turn = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "actualPosition", {
        get: function () {
            return this._actualPosition;
        },
        set: function (num) {
            this._actualPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "rightPositionLetters", {
        get: function () {
            return this._rightPositionLetters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "misplacedPositionLetters", {
        get: function () {
            return this._misplacedPositionLetters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLogic.prototype, "typeCell", {
        get: function () {
            return this._typeCell;
        },
        enumerable: false,
        configurable: true
    });
    GameLogic.getInstance = function (pickedWord) {
        if (!GameLogic.instance) {
            GameLogic.instance = new GameLogic(pickedWord);
        }
        return GameLogic.instance;
    };
    GameLogic.prototype.checkWordIsRight = function () {
        this._checkFinal = new CheckWordIsRight(this.pickedWord);
        return this._checkFinal.check();
    };
    GameLogic.prototype.checkGameIsOver = function () {
        this._checkFinal = new CheckLoser(this.pickedWord);
        return this._checkFinal.check();
    };
    return GameLogic;
}(Interface));
export { GameLogic };
