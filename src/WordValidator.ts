import { IGameUI } from "./IGameUI.js";
import { MAX_WORD_SIZE } from "./env.js";

export class WordValidator {

    checkWord(actualWord: string, pickedWord: string, turn: number, ui: IGameUI): void {
        this.checkRightLetters(actualWord, pickedWord, turn, ui);
        this.checkMisplacedLetters(actualWord, pickedWord, turn, ui);
        this.checkWrongLetters(actualWord, pickedWord, turn, ui);
    }
    

    checkRightLetters(actualWord: string, pickedWord: string, turn: number, ui: IGameUI): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (actualWord[i] === pickedWord[i]) {
                ui.changeCellColor(turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters(actualWord: string, pickedWord: string, turn: number, ui: IGameUI): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const actualLetter = actualWord[i];
            const occurrences = (pickedWord.match(new RegExp(actualLetter, "g")) || []).length;
            const isNotRightPlace = actualLetter !== pickedWord[i];
            if (occurrences > 0 && isNotRightPlace) {
                ui.changeCellColor(turn, i, "misplacedLetter");
            }
        }
    }

    checkWrongLetters(actualWord: string, pickedWord: string, turn: number, ui: IGameUI): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const actualLetter = actualWord[i];
            const occurrences = (pickedWord.match(new RegExp(actualLetter, "g")) || []).length;
            if (occurrences === 0) {
                ui.changeCellColor(turn, i, "wrongLetter");
            }
        }
    }
 
}