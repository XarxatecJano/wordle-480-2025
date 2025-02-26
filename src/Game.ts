import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Word } from "./model/Word.js";
import { Letter } from "./model/Letter.js";
import { GameState } from "./model/GameState.js";
import { GameChecker } from "./utils/WordChecker.js";
import { CheckLettersFactory } from "./CheckLettersFactory.js";
import { KeyType } from "./enum/KeyType.js";

export class Game {
    
    private gameChecker: GameChecker;
    private gameState: GameState;

    constructor(pickedWord: Word) {
        this.gameState = new GameState(pickedWord);
        this.gameChecker = new GameChecker(this.gameState);
    }

    getGameChecker(): GameChecker {
        return this.gameChecker;
    }

    setNewLetter(letter: Letter): void {
        this.gameChecker.setNewLetter(letter);
    }

    updateAfterANewWord = (): void => {
        CheckLettersFactory.check(this.gameState, KeyType.RIGHT);
        CheckLettersFactory.check(this.gameState, KeyType.MISPLACED);
        CheckLettersFactory.check(this.gameState, KeyType.USED);

        this.gameState.nextTurn();
        this.gameState.actualWord = new Word([]);
    }

    wordIsMaxLength(): boolean {
        if (this.gameState.actualWord.getSize() == MAX_WORD_SIZE) return true;
        return false;
    }

    getWordSize(): number {
        return this.gameState.actualWord.getSize();
    }

    removeLastLetter(): void {
        this.gameChecker.removeLastLetter();
    }
}