import { GameGrid } from "../../../interface/GameGrid.js";
import { GameKeyboard } from "../../../interface/GameKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
var CheckLetters = /** @class */ (function () {
    function CheckLetters() {
        this.interfaceController = new UserInterfaceController();
        this.grid = new GameGrid(this.interfaceController);
        this.keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);
    }
    return CheckLetters;
}());
export { CheckLetters };
