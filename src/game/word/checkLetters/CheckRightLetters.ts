import { CheckLetters } from "./CheckLetters.js";
import { KeyState } from "../../../interface/keyboard/KeyState.js";
import { MAX_WORD_SIZE } from "../../../env.js";
import { GameState } from "../../GameState.js";

export class checkRightLetters extends CheckLetters {
    check(gameState: GameState, charCounter: { [key: string]: number }): { [key: string]: number } {
        let charCount = { ...charCounter };

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const actualLetter = gameState.actualWord.getLetterAtIndex(i);
            const pickedLetter = gameState.pickedWord.getLetterAtIndex(i);
            if (actualLetter.equals(pickedLetter)) {
                charCount[pickedLetter.getChar()]--;
                this.grid.setLetterState(gameState.turn, i, KeyState.RIGHT);
                this.keyboard.setKeyState(gameState.pickedWord.getLetterAtIndex(i).getCode(), KeyState.RIGHT);
            }
        }
        return charCount;
    }
}