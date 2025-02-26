import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
import { KeyType } from "../enum/KeyType.js";
import { GameState } from "../model/GameState.js";
import { UserInterfaceController } from "../controller/UserInterfaceController.js";
import { GameKeyboard } from "../controller/GameKeyboard.js";
import { GameGrid } from "../controller/GameGrid.js";
import { Word } from "../model/Word.js";
import { Letter } from "../model/Letter.js";

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
        if (letter.isValidLetter()) {
            if (this.gameState.actualWord.getSize() < MAX_WORD_SIZE) {
                return true;
            }
        }
        return false;
    }

    setNewLetter(letter: Letter): void {
        this.grid.setNewLetter(this.gameState.turn, this.gameState.actualWord.getSize(), letter.getChar());
        this.gameState.actualWord.addLetter(letter);
        console.log(this.gameState.actualWord.getWordString());
    }

    removeLastLetter(): void {
        this.gameState.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameState.turn, this.gameState.actualWord.getSize());
    }

    highlightLetters(): void {
        for (let letter of this.gameState.actualWord.getLetters()){
            this.keyboard.setKeyState(letter.getCode(), KeyType.USED);
        }
    }

    checkMisplacedLetters = (): void => {
        
    }

    checkWrongLetters = (): void => {
        
    }

    checkWordIsRight(): void {
        if (this.gameState.actualWord.equals(this.gameState.pickedWord)) {
            this.gameState.callWin();
        }
    }

    checkGameIsOver(): void {
        if (this.gameState.turn == MAX_ATTEMPTS) {
            this.gameState.callGameOver();
        }
    }
}