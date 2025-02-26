import { CheckLetters } from "./CheckLetters.js";
import { GameGrid } from "../controller/GameGrid.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { KeyType } from "../enum/KeyType.js";
import { MAX_WORD_SIZE } from "../env.js";
import { GameState } from "../model/GameState.js";
import { Letter } from "../model/Letter.js";

export class checkMisplacedLetters implements CheckLetters {
    interfaceController = new UserInterfaceController();
    grid = new GameGrid(this.interfaceController);
    keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);

    check(gameState: GameState): void {
        let actualLetter: Letter;
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;

        let characters: { [key: string]: number } = {};
        for (let letter of gameState.actualWord.getLetters()) {
            const char = letter.getChar();
            if (characters[char]) {
                characters[char]++;
            } else {
                characters[char] = 1;
            }
        }
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = gameState.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (/*differenceOfCoincidences == 0^ &&*/ gameState.pickedWord.getLetterAtIndex(i).equals(gameState.actualWord.getLetterAtIndex(i))) {
                isMisplacedLetter = false;
                continue;
            }
            if (differenceOfCoincidences >= 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    console.log('MISPLACED | gameState.pickedWord.getLetterAtIndex(j): %s', gameState.pickedWord.getLetterAtIndex(j).getChar())
                    if (gameState.pickedWord.getLetterAtIndex(j).equals(actualLetter)) {
                        console.log('MISPLACED | Misplaced and wrong %s', actualLetter.getChar());

                        isMisplacedLetter = false;
                        this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                        this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
                        continue;
                    }
                }
            }
            
            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                console.log('Misplaced %s', actualLetter.getChar());

                this.grid.setLetterState(gameState.turn, i, KeyType.MISPLACED);
                this.keyboard.setKeyState(actualLetter.getCode(), KeyType.MISPLACED);
            }
        }
    }
}