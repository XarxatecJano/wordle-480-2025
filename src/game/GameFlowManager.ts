import { MAX_WORD_SIZE } from "../env.js";
import { Word } from "./word/Word.js";
import { Letter } from "./word/Letter.js";
import { GameState } from "./GameState.js";
import { GameChecker } from "./GameChecker.js";
import { CheckLettersFactory } from "./word/checkLetters/CheckLettersFactory.js";
import { KeyState } from "../interface/keyboard/KeyState.js";
import { UserInterfaceController } from "../interface/UserInterfaceController.js";
import { InterfaceGrid } from "../interface/InterfaceGrid.js";

export class GameFlowManager {
    private gameChecker: GameChecker;
    private gameState: GameState;
    private userInterfaceController: UserInterfaceController;
    private grid: InterfaceGrid;

    constructor(pickedWord: Word) {
        this.gameState = new GameState(pickedWord);
        this.gameChecker = new GameChecker(this.gameState);
        this.userInterfaceController = new UserInterfaceController();
        this.grid = new InterfaceGrid(this.userInterfaceController);
    }

    setNewLetter(letter: Letter): void {
        if (this.gameChecker.checkNewLetter(letter)){
            this.grid.setNewLetter(this.gameState.turn, this.gameState.actualWord.getSize(), letter.getChar());
            this.gameState.actualWord.addLetter(letter);
        }
    }

    removeLastLetter(): void {
        this.gameState.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameState.turn, this.gameState.actualWord.getSize());
    }

    submitWord(): void {
        this.gameChecker.checkWordIsRight();
        this.gameChecker.checkGameIsOver();
        this.updateAfterANewWord();
    }

    private updateAfterANewWord(): void {
        const checkLettersFactory = new CheckLettersFactory(this.gameState);
        checkLettersFactory.check(KeyState.RIGHT);
        checkLettersFactory.check(KeyState.MISPLACED);
        this.gameState.nextTurn();
        this.gameState.actualWord = new Word([]);
    }

    wordIsMaxLength(): boolean {
        return this.gameState.actualWord.getSize() === MAX_WORD_SIZE;
    }

    getWordSize(): number {
        return this.gameState.actualWord.getSize();
    }
}