import { CreateChecks } from "../Check/CreateChecks.js";
import { UpadateGame } from "../Game/UpdateGame.js";
import { MAX_WORD_SIZE } from "../env.js";
var EnterPressed = /** @class */ (function () {
    function EnterPressed(game) {
        var _this = this;
        this.updateAfterANewWord = function () {
            var checks = CreateChecks.getInstance();
            _this._gameUpdater = UpadateGame.getInstance(_this._game);
            _this._gameUpdater.updateAfterANewWordLogic(checks);
            _this.paintBakcgroundCells();
            _this._gameUpdater.clearAfterANewWord();
        };
        this._game = game;
    }
    EnterPressed.prototype.execute = function () {
        if (this._game.gameLogic.actualWord.length == MAX_WORD_SIZE) {
            this._game.checkWordIsRight();
            this._game.checkGameIsOver();
            this.updateAfterANewWord();
        }
    };
    EnterPressed.prototype.paintBakcgroundCells = function () {
        var _this = this;
        this._game.gameLogic.typeCell.forEach(function (type, position) {
            _this._game.gameLogic.changeBackgroundPosition(_this._game.gameLogic.turn, position, type);
        });
    };
    return EnterPressed;
}());
export { EnterPressed };
