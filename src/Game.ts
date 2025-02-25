import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { UserInterfaceController } from "./UserInterfaceController.js";
import { Word } from "./Word.js";
import { Letter } from "./Letter.js";
import { GameKeyboard } from "./GameKeyboard.js";
import { KeyState } from "./KeyState.js";
import { GameGrid } from "./GameGrid.js";

export class Game {
    private pickedWord: Word
    private actualWord: Word
    private turn: number

    private interface: UserInterfaceController
    private keyboard: GameKeyboard;
    private grid: GameGrid;

    constructor(pickedWord: Word) {
        this.pickedWord = pickedWord;
        this.actualWord = new Word([]);
        this.turn = 1;
        
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }

    setGridLetterState(position: number, state: string) {
        this.grid.setGridLetterState(this.turn, position, state);
    }

    checkWordIsRight(): void {
        if (this.actualWord.equals(this.pickedWord)) {
            location.assign("/winner");
        }
    }

    highlightLetters(): void {
        for (let letter of this.actualWord.getLetters()){
            this.keyboard.setKeyboardKeyState(letter.getCode(), KeyState.USED);
        }
    }

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const state = this.pickedWord.checkLetter(this.actualWord.getLetterAtIndex(i), i);
            if (state == KeyState.RIGHT) {
                this.setGridLetterState(i, "rightLetter");
                this.keyboard.setKeyboardKeyState(this.pickedWord.getLetterAtIndex(i).getCode(), KeyState.RIGHT);
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
            actualLetter = this.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = this.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = this.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences == 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (this.pickedWord.getLetterAtIndex(j) == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences == 0 && this.pickedWord.getLetterAtIndex(i) == this.actualWord.getLetterAtIndex(i)) {
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
            actualLetter = this.actualWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = this.pickedWord.numberOfCoincidences(pattern);
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
        this.turn = this.turn + 1;
        this.actualWord = new Word([]);
    }

    checkGameIsOver(): void {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }

    isValidLetter(letter: Letter): boolean {
        if (letter.isValidLetter()) {
            if (this.actualWord.getSize() < MAX_WORD_SIZE) {
                return true;
            }
        }
        return false;
    }

    setNewLetter(letter: Letter): void {
        this.grid.setNewLetter(this.turn, this.actualWord.getSize(), letter.getChar());
        this.actualWord.addLetter(letter);
    }

    wordIsComplete(): boolean {
        if (this.actualWord.getSize() == MAX_WORD_SIZE) return true;
        return false;
    }

    getWordSize(): number {
        return this.actualWord.getSize();
    }

    removeLastLetter(): void {
        this.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.turn, this.actualWord.getSize());
    }
}