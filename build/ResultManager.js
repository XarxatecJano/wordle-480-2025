var ResultManager = /** @class */ (function () {
    function ResultManager() {
    }
    ResultManager.prototype.checkVictory = function (actualWord, pickedWord) {
        return actualWord === pickedWord;
    };
    ResultManager.prototype.handleVictory = function () {
        location.assign("/winner");
    };
    ResultManager.prototype.handleGameOver = function () {
        location.assign("/loser");
    };
    return ResultManager;
}());
export { ResultManager };
