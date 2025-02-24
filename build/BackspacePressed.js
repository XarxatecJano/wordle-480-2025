var BackspacePressed = /** @class */ (function () {
    function BackspacePressed(game) {
        this._game = game;
    }
    BackspacePressed.prototype.execute = function () {
        if (this._game.actualPosition > 0) {
            this._game.actualPosition -= 1;
            this._game.actualWord = this._game.actualWord.slice(0, -1);
            this._game.deleteLetter(this._game.turn, this._game.actualPosition);
        }
    };
    return BackspacePressed;
}());
export { BackspacePressed };
