import { InterfaceGrid } from "../../../interface/InterfaceGrid.js";
import { InterfaceKeyboard } from "../../../interface/InterfaceKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
var CheckLetters = /** @class */ (function () {
    function CheckLetters() {
        this.userInterfaceController = new UserInterfaceController();
        this.grid = new InterfaceGrid(this.userInterfaceController);
        this.keyboard = InterfaceKeyboard.getGameKeyboard(this.userInterfaceController);
    }
    return CheckLetters;
}());
export { CheckLetters };
