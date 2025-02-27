import { GameLogic } from "./GameLogic.js";
var Game = /** @class */ (function () {
    function Game(pickedWord, navigation) {
        this._gameLogic = GameLogic.getInstance(pickedWord);
        this._navigation = navigation;
    }
    Object.defineProperty(Game.prototype, "gameLogic", {
        get: function () {
            return this._gameLogic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "navigation", {
        get: function () {
            return this._navigation;
        },
        enumerable: false,
        configurable: true
    });
    Game.getInstance = function (pickedWord, navigation) {
        if (!Game.instance)
            Game.instance = new Game(pickedWord, navigation);
        return Game.instance;
    };
    Game.prototype.checkWordIsRight = function () {
        if (this._gameLogic.checkWordIsRight())
            this._navigation.navigateTo("/winner");
    };
    Game.prototype.checkGameIsOver = function () {
        if (this._gameLogic.checkGameIsOver())
            this._navigation.navigateTo("/loser");
    };
    return Game;
}());
export { Game };
