import { CheckLetters } from "./CheckLetters.js";
import { GameGrid } from "../interface/GameGrid.js";
import { GameKeyboard } from "../interface/GameKeyboard.js";
import { UserInterfaceController } from "../interface/UserInterfaceController.js";
import { KeyType } from "../interface/keyboard/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
import { GameState } from "../game/GameState.js";

export class checkRightLetters implements CheckLetters {
    interfaceController = new UserInterfaceController();
    grid = new GameGrid(this.interfaceController);
    keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);

    check(gameState: GameState): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const state = gameState.pickedWord.checkLetter(gameState.actualWord.getLetterAtIndex(i), i);
            if (state == KeyType.RIGHT) {
                this.grid.setLetterState(gameState.turn, i, KeyType.RIGHT);
                this.keyboard.setKeyState(gameState.pickedWord.getLetterAtIndex(i).getCode(), KeyType.RIGHT);
            }
        }
    }
}