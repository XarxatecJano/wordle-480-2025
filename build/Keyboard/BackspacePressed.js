var BackspacePressed = /** @class */ (function () {
    function BackspacePressed(game) {
        this._game = game;
    }
    BackspacePressed.prototype.execute = function () {
        if (this._game.gameLogic.actualPosition > 0) {
            this._game.gameLogic.actualPosition -= 1;
            this._game.gameLogic.actualWord = this._game.gameLogic.actualWord.slice(0, -1);
            this._game.gameLogic.deleteLetter(this._game.gameLogic.turn, this._game.gameLogic.actualPosition);
        }
    };
    return BackspacePressed;
}());
export { BackspacePressed };
