import { CheckLetters } from "./CheckLetters.js";
import { GameGrid } from "../../../interface/GameGrid.js";
import { GameKeyboard } from "../../../interface/GameKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
import { KeyType } from "../../../interface/keyboard/KeyType.js";
import { MAX_WORD_SIZE } from "../../../env.js";
import { GameState } from "../../GameState.js";
import { Letter } from "../Letter.js";
import { Word } from "../Word.js";

export class checkMisplacedLetters implements CheckLetters {
    interfaceController = new UserInterfaceController();
    grid = new GameGrid(this.interfaceController);
    keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);

    private createDictionary(pickedWord: Word): { [key: string]: number } {
        let charactersCount: { [key: string]: number } = {};
        for (let letter of pickedWord.getLetters()) {
            const char = letter.getChar();
            if (charactersCount[char]) {
                charactersCount[char]++;
            } else {
                charactersCount[char] = 1;
            }
        }
        return charactersCount;
    }

    private subtractRightWordsFromDictionary(actualWord: Word, pickedWord: Word, charactersCount:{ [key: string]: number }):{ [key: string]: number }{
        let dictionary = { ...charactersCount };
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const actualLetter = actualWord.getLetterAtIndex(i);
            const pickedLetter = pickedWord.getLetterAtIndex(i);
            if (actualLetter.equals(pickedLetter)) {
                dictionary[pickedLetter.getChar()]--;
            }
        }
        return dictionary;
    }

    check(gameState: GameState): void {
        let actualLetter: Letter;
        let pickedLetter: Letter;

        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;

        let charactersCount: { [key: string]: number } = {};
        charactersCount = this.createDictionary(gameState.pickedWord);
        charactersCount = this.subtractRightWordsFromDictionary(gameState.actualWord, gameState.pickedWord, charactersCount);
        
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pickedLetter = gameState.pickedWord.getLetterAtIndex(i);

            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = gameState.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);

            if (pickedLetter.equals(actualLetter)) {
                isMisplacedLetter = false;
            }
            else {
                if (charactersCount[actualLetter.getChar()] > 0){
                    charactersCount[actualLetter.getChar()]--;

                    this.grid.setLetterState(gameState.turn, i, KeyType.MISPLACED);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyType.MISPLACED);
                } else {
                    isMisplacedLetter = false;
                    this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
                }
            }
        }
    }
}