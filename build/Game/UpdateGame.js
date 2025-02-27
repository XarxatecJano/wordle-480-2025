var UpadateGame = /** @class */ (function () {
    function UpadateGame(game) {
        this._game = game;
    }
    UpadateGame.getInstance = function (game) {
        if (!UpadateGame.instance) {
            UpadateGame.instance = new UpadateGame(game);
        }
        return UpadateGame.instance;
    };
    UpadateGame.prototype.updateAfterANewWordLogic = function (checks) {
        var _this = this;
        var strategies = checks.check(this._game.gameLogic);
        strategies.forEach(function (strategy) { return strategy.check(_this._game); });
    };
    UpadateGame.prototype.clearAfterANewWord = function () {
        this._game.gameLogic.rightPositionLetters.clear();
        this._game.gameLogic.misplacedPositionLetters.clear();
        this._game.gameLogic.typeCell.clear();
        this._game.gameLogic.turn += 1;
        this._game.gameLogic.actualPosition = 0;
        this._game.gameLogic.actualWord = "";
    };
    return UpadateGame;
}());
export { UpadateGame };
