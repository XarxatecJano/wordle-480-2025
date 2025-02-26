var GameGrid = /** @class */ (function () {
    function GameGrid(interfaceController) {
        this.interface = interfaceController;
    }
    GameGrid.prototype.setLetterState = function (turn, position, state) {
        this.interface.changeGridCellLetter(turn, position, state);
    };
    GameGrid.prototype.setNewLetter = function (turn, position, char) {
        this.interface.setNewLetter(turn, position, char);
    };
    GameGrid.prototype.deleteLetter = function (turn, position) {
        this.interface.deleteLetter(turn, position);
    };
    return GameGrid;
}());
export { GameGrid };
