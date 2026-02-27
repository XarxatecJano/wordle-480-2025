import { InterfaceGrid } from "../../../interface/InterfaceGrid.js";
import { InterfaceKeyboard } from "../../../interface/InterfaceKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
import { GameState } from "../../GameState.js";

export abstract class CheckLetters {
    userInterfaceController = new UserInterfaceController();
    grid = new InterfaceGrid(this.userInterfaceController);
    keyboard = InterfaceKeyboard.getGameKeyboard(this.userInterfaceController);

    abstract check(gameState: GameState, charCounter: { [key: string]: number } ): { [key: string]: number };
}