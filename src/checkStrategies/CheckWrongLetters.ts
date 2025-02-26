import { CheckLetters } from "./CheckLetters.js";
import { GameGrid } from "../controller/GameGrid.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { KeyType } from "../enum/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
import { GameState } from "../model/GameState.js";
import { Letter } from "../model/Letter.js";

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
                console.log('Wrong %s', actualLetter.getChar());

                this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
            }
        }
    }
}