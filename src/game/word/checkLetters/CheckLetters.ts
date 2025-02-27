import { GameGrid } from "../../../interface/GameGrid.js";
import { GameKeyboard } from "../../../interface/GameKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
import { GameState } from "../../GameState.js";

export abstract class CheckLetters {
    interfaceController = new UserInterfaceController();
    grid = new GameGrid(this.interfaceController);
    keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);

    abstract check(gameState: GameState, charCounter: { [key: string]: number } ): { [key: string]: number };
}