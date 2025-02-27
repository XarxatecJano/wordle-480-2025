import { CheckLetters } from "./CheckLetters.js";
import { KeyState } from "../../../interface/keyboard/KeyState.js";
import { MAX_WORD_SIZE } from "../../../env.js";
import { GameState } from "../../GameState.js";


export class checkMisplacedAndWrongLetters extends CheckLetters {

    check(gameState: GameState, charCounter: { [key: string]: number }): { [key: string]: number } {
        let charCount = { ...charCounter };

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const actualLetter = gameState.actualWord.getLetterAtIndex(i);
            const pickedLetter = gameState.pickedWord.getLetterAtIndex(i);

            if (!pickedLetter.equals(actualLetter)) {
                if (charCount[actualLetter.getChar()] > 0){
                    charCount[actualLetter.getChar()]--;
    
                    this.grid.setLetterState(gameState.turn, i, KeyState.MISPLACED);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyState.MISPLACED);
                } else {
                    this.grid.setLetterState(gameState.turn, i, KeyState.WRONG);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyState.WRONG);
                }
            }
        }
        return charCount;
    }
}