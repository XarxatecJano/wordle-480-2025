import { CreateChecks } from "../Check/CreateChecks.js";
import { MAX_WORD_SIZE } from "../env.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        var _this = this;
        this.updateAfterANewWord = function () {
            var checks = CreateChecks.getInstance();
            var strategies = checks.check(_this._game);
            strategies.forEach(function (strategy) { return strategy.check(_this._game); });
            _this.paintBakcgroundCells();
            _this._game.rightPositionLetters.clear();
            _this._game.misplacedPositionLetters.clear();
            _this._game.typeCell.clear();
            _this._game.turn += 1;
            _this._game.actualPosition = 0;
            _this._game.actualWord = "";
        };
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        if (this._game.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateAfterANewWord();
        }
    };
    EnterPressed.prototype.paintBakcgroundCells = function () {
        var _this = this;
        this._game.typeCell.forEach(function (type, position) {
            _this._game.changeBackgroundPosition(_this._game.turn, position, type);
        });
    };
    return EnterPressed;
}());
export { EnterPressed };
