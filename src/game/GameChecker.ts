import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
import { GameState } from "./GameState.js";
import { Letter } from "./word/Letter.js";

export class GameChecker {
    private gameState: GameState;

    constructor(gameState: GameState) {
        this.gameState = gameState;
        
    }

    checkNewLetter(letter: Letter): boolean {
        return this.gameState.actualWord.getSize() < MAX_WORD_SIZE
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