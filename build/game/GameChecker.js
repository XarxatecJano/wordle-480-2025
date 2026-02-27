import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
var GameChecker = /** @class */ (function () {
    function GameChecker(gameState) {
        this.gameState = gameState;
    }
    GameChecker.prototype.checkNewLetter = function (letter) {
        return this.gameState.actualWord.getSize() < MAX_WORD_SIZE;
    };
    GameChecker.prototype.checkWordIsRight = function () {
        if (this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callWin();
        }
    };
    GameChecker.prototype.checkGameIsOver = function () {
        if (this.gameState.turn == MAX_ATTEMPTS && !this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callGameOver();
        }
    };
    return GameChecker;
}());
export { GameChecker };
