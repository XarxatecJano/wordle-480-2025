import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
import { KeyType } from "../interface/keyboard/KeyType.js";
import { GameState } from "./GameState.js";
import { UserInterfaceController } from "../interface/UserInterfaceController.js";
import { GameKeyboard } from "../interface/GameKeyboard.js";
import { GameGrid } from "../interface/GameGrid.js";
import { Word } from "../word/Word.js";
import { Letter } from "../word/Letter.js";

export class GameChecker {
    private gameState: GameState;
    private interface: UserInterfaceController
    private keyboard: GameKeyboard;
    private grid: GameGrid;

    constructor(gameState: GameState) {
        this.gameState = gameState;
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }

    isValidLetter(letter: Letter): boolean {
        if (letter.isValidLetter() && this.gameState.actualWord.getSize() < MAX_WORD_SIZE) {
            return true;
        }
        return false;
    }

    setNewLetter(letter: Letter): void {
        this.grid.setNewLetter(this.gameState.turn, this.gameState.actualWord.getSize(), letter.getChar());
        this.gameState.actualWord.addLetter(letter);
    }

    removeLastLetter(): void {
        this.gameState.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameState.turn, this.gameState.actualWord.getSize());
    }

    highlightLetters(): void {
        for (let letter of this.gameState.actualWord.getLetters()) {
            this.keyboard.setKeyState(letter.getCode(), KeyType.USED);
        }
    }

    checkWordIsRight(): void {
        if (this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callWin();
        }
    }

    checkGameIsOver(): void {
        if (this.gameState.turn == MAX_ATTEMPTS && !this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callGameOver();
        }
    }
}