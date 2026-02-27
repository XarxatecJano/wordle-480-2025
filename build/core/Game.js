import { KeyBoardController } from "../controllers/keyBoardController.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        this._keyBoardController = new KeyBoardController(pickedWord);
    }
    Game.getInstance = function (pickedWord) {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    };
    Game.prototype.newKeyPressed = function (code) {
        this._keyBoardController.setNewKey(code);
    };
    return Game;
}());
export { Game };
