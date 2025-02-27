import { CheckLetters } from "./CheckLetters.js";
import { GameGrid } from "../interface/GameGrid.js";
import { GameKeyboard } from "../interface/GameKeyboard.js";
import { UserInterfaceController } from "../interface/UserInterfaceController.js";
import { KeyType } from "../interface/keyboard/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
import { GameState } from "../game/GameState.js";
import { Letter } from "../word/Letter.js";

export class checkWrongLetters implements CheckLetters {
    interfaceController = new UserInterfaceController();
    grid = new GameGrid(this.interfaceController);
    keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);

    check(gameState: GameState): void {
        let actualLetter: Letter;
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord = 0;

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            if (numberOfCoincidencesPickedWord == 0) {
                this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
            }
        }
    }
}