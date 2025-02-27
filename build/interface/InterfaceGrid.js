var InterfaceGrid = /** @class */ (function () {
    function InterfaceGrid(interfaceController) {
        this.userInterfaceController = interfaceController;
    }
    InterfaceGrid.prototype.setLetterState = function (turn, position, state) {
        this.userInterfaceController.changeGridCellLetter(turn, position, state);
    };
    InterfaceGrid.prototype.setNewLetter = function (turn, position, char) {
        this.userInterfaceController.setNewLetter(turn, position, char);
    };
    InterfaceGrid.prototype.deleteLetter = function (turn, position) {
        this.userInterfaceController.deleteLetter(turn, position);
    };
    return InterfaceGrid;
}());
export { InterfaceGrid };
