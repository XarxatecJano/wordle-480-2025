var GameState = /** @class */ (function () {
    function GameState() {
        this.turn = 1,
            this.position = 0,
            this.currentWord = "";
    }
    GameState.prototype.getTurn = function () {
        return this.turn;
    };
    GameState.prototype.incrementTurn = function () {
        this.turn++;
    };
    GameState.prototype.getPosition = function () {
        return this.position;
    };
    GameState.prototype.setPosition = function (position) {
        this.position = position;
    };
    GameState.prototype.getCurrentWord = function () {
        return this.currentWord;
    };
    GameState.prototype.setCurrentWord = function (word) {
        this.currentWord = word;
    };
    GameState.prototype.isGameOver = function (maxAttempts) {
        return this.turn >= maxAttempts;
    };
    return GameState;
}());
export { GameState };
