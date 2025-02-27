import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "../env.js";
import { Word } from "../word/Word.js";
import { Letter } from "../word/Letter.js";
import { GameState } from "./GameState.js";
import { GameChecker } from "./GameChecker.js";
import { CheckLettersFactory } from "../checkLetters/CheckLettersFactory.js";
import { KeyType } from "../interface/keyboard/KeyType.js";

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
        if(this.gameState.actualWord.getSize() < 5){
            this.gameChecker.setNewLetter(letter);
        }
    }

    wordSubmittedChecks(){
        this.gameChecker.checkWordIsRight();
        this.gameChecker.checkGameIsOver();
    }

    updateAfterANewWord = (): void => {
        CheckLettersFactory.check(this.gameState, KeyType.RIGHT);
        CheckLettersFactory.check(this.gameState, KeyType.MISPLACED);
        CheckLettersFactory.check(this.gameState, KeyType.USED);
        this.wordSubmittedChecks();

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