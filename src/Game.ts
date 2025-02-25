import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { UserInterfaceController } from "./controller/UserInterfaceController.js";
import { Word } from "./model/Word.js";
import { Letter } from "./model/Letter.js";
import { GameKeyboard } from "./controller/GameKeyboard.js";
import { KeyType } from "./enum/KeyType.js";
import { GameGrid } from "./controller/GameGrid.js";
import { GameState } from "./model/GameState.js";

export class Game {
    
    private gameManager: GameState;
    private interface: UserInterfaceController
    private keyboard: GameKeyboard;
    private grid: GameGrid;

    constructor(pickedWord: Word) {
        this.gameManager = new GameState(pickedWord);
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }

    setGridLetterState(position: number, state: string) {
        this.grid.setGridLetterState(this.gameManager.turn, position, state);
    }

    highlightLetters(): void {
        for (let letter of this.gameManager.actualWord.getLetters()){
            this.keyboard.setKeyboardKeyState(letter.getCode(), KeyType.USED);
        }
    }

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const state = this.gameManager.pickedWord.checkLetter(this.gameManager.actualWord.getLetterAtIndex(i), i);
            if (state == KeyType.RIGHT) {
                this.setGridLetterState(i, "rightLetter");
                this.keyboard.setKeyboardKeyState(this.gameManager.pickedWord.getLetterAtIndex(i).getCode(), KeyType.RIGHT);
            }
        }
    }

    checkMisplacedLetters = (): void => {
        let actualLetter: Letter;
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this.gameManager.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = this.gameManager.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = this.gameManager.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences == 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (this.gameManager.pickedWord.getLetterAtIndex(j) == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences == 0 && this.gameManager.pickedWord.getLetterAtIndex(i) == this.gameManager.actualWord.getLetterAtIndex(i)) {
                isMisplacedLetter = false;
            }
            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                this.setGridLetterState(i, "misplacedLetter");
                /*this.keyboard.setKeyboardKeyState(this.pickedWord.getLetterAtIndex(i).getCode(), KeyState.MISPLACED);*/
            }
        }
    }

    checkWrongLetters = (): void => {
        let actualLetter: Letter;
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this.gameManager.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = this.gameManager.pickedWord.numberOfCoincidences(pattern);
            if (numberOfCoincidencesPickedWord == 0) {
                this.setGridLetterState(i, "wrongLetter");
            }
        }
    }

    updateAfterANewWord = (): void => {
        this.highlightLetters();
        this.checkWrongLetters();
        this.checkMisplacedLetters();
        this.checkRightLetters();
        this.gameManager.checkWordIsRight();
        this.gameManager.checkGameIsOver();
        this.gameManager.nextTurn();
        this.gameManager.actualWord = new Word([]);
    }

    isValidLetter(letter: Letter): boolean {
        if (letter.isValidLetter()) {
            if (this.gameManager.actualWord.getSize() < MAX_WORD_SIZE) {
                return true;
            }
        }
        return false;
    }

    setNewLetter(letter: Letter): void {
        this.grid.setNewLetter(this.gameManager.turn, this.gameManager.actualWord.getSize(), letter.getChar());
        this.gameManager.actualWord.addLetter(letter);
    }

    wordIsComplete(): boolean {
        if (this.gameManager.actualWord.getSize() == MAX_WORD_SIZE) return true;
        return false;
    }

    getWordSize(): number {
        return this.gameManager.actualWord.getSize();
    }

    removeLastLetter(): void {
        this.gameManager.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameManager.turn, this.gameManager.actualWord.getSize());
    }
}