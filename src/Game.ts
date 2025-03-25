import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import { ILetterDisplay } from "./ILetterDisplay.js";
import { ICellStyler } from "./ICellStyler.js";
import { IKeyboardStyler } from "./IKeyboardStyler.js";
import { IWordValidator } from "./IWordValidator.js";
import { IInputHandler } from "./IINputHandler.js";
import { IGameState } from "./IGameState.js";
import { IWordEvaluator  } from "./IWordEvaluator.js";

export class Game {
    private targetWord : string;
    private letterDisplay: ILetterDisplay;
    private cellStyler: ICellStyler;
    private keyboardStyler: IKeyboardStyler;
    private wordValidator: IWordValidator;
    private inputHandler: IInputHandler;
    private gameState: IGameState;
    private wordEvaluator: IWordEvaluator;

    constructor(
        targetWord: string,
        letterDisplay: ILetterDisplay,
        cellStyler: ICellStyler,
        keyboardStyler: IKeyboardStyler,
        wordValidator: IWordValidator,
        inputHandler: IInputHandler,
        gameState: IGameState,
        wordEvaluator: IWordEvaluator
    ) {
        this.targetWord = targetWord,
        this.letterDisplay = letterDisplay,
        this.cellStyler = cellStyler,
        this.keyboardStyler = keyboardStyler
        this.wordValidator = wordValidator,
        this.inputHandler = inputHandler,
        this.gameState = gameState,
        this.wordEvaluator = wordEvaluator;

    }

    newKeyPressed(code: string): void {
        this.inputHandler.setCurrentPosition(this.gameState.getPosition());

        if (this.inputHandler.isValidLetter(code)) {
            this.handleLetter(code);
        } else if (this.inputHandler.isEnterKey(code)) {
            this.handleEnter();
        } else if (this.inputHandler.isBackspaceKey(code)) {
            this.handleBackSpace();
        }
    }

    private handleLetter(code: string): void {
        const letter = this.inputHandler.transformCodeToLetter(code);
        const turn = this.gameState.getTurn();
        const position = this.gameState.getPosition();

        this.letterDisplay.setLetter(turn, position, letter);
        this.gameState.setPosition(position + 1);
        this.gameState.setCurrentWord(this.gameState.getCurrentWord() + letter);
    }

    private handleEnter(): void {
        const currentWord = this.gameState.getCurrentWord();

        if (this.wordValidator.isComplete(currentWord)) {
            this.checkWordStatus();
            this.updateGameState();
        }
    }

    private checkWordStatus(): void {
        const currentWord = this.gameState.getCurrentWord();

        if (this.wordValidator.isCorrect(currentWord, this.targetWord)) {
            location.assign("/winner")
            return;
        }

        if (this.gameState.isGameOver(MAX_ATTEMPTS)) {
            location.assign("/loser");
            return;
        }
    }

    private updateGameState(): void  {
        const turn = this.gameState.getTurn();
        const currentWord = this.gameState.getCurrentWord();

        const rightPositions = this.wordEvaluator.checkRightLetters(currentWord, this.targetWord);
        const misplacedPositions = this.wordEvaluator.checkMisplacedLetters(currentWord, this.targetWord);
        const wrongPositions = this.wordEvaluator.checkWrongLetters(currentWord, this.targetWord);

        rightPositions.forEach(position => {
            this.cellStyler.applyCellStyle(turn, position, "rightLetter");
        });

        misplacedPositions.forEach(postion => {
            this.cellStyler.applyCellStyle(turn, postion, "misplacedLetter");
        });

        wrongPositions.forEach(position => {
            this.cellStyler.applyCellStyle(turn, position, "wrongLetter");
        });

        this.gameState.incrementTurn();
        this.gameState.setPosition(0);
        this.gameState.setCurrentWord("")
    }

    private handleBackSpace(): void {
        const position = this.gameState.getPosition();

        if (position > 0) {
            const newPosition = position - 1;
            this.gameState.setPosition(newPosition);

            const turn = this.gameState.getTurn();
            this.letterDisplay.clearLetter(turn, newPosition);

            const currentWord = this.gameState.getCurrentWord();
            this.gameState.setCurrentWord(currentWord.slice(0, -1));
        }
    }

    
}