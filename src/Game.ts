import { IGameUI } from "./IGameUI";
import { InputManager } from "./InputManager";
import { WordValidator } from "./WordValidator";
import { ResultManager } from "./ResultManager";

export class Game {
    private pickedWord: string;
    private actualWord: string = "";
    private turn: number = 1;
    private position: number = 0;
    private ui: IGameUI;
    private inputManager: InputManager;
    private wordValidator: WordValidator;
    private resultManager: ResultManager;
    private maxAttempts: number;
    private maxWordSize: number;

    constructor(
        pickedWord: string,
        ui: IGameUI,
        inputManager: InputManager,
        wordValidator: WordValidator,
        resultManager: ResultManager,
        maxAttempts: number,
        maxWordSize: number
    ) {
        this.pickedWord = pickedWord;
        this.ui = ui;
        this.inputManager = inputManager;
        this.wordValidator = wordValidator;
        this.resultManager = resultManager;
        this.maxAttempts = maxAttempts;
        this.maxWordSize = maxWordSize;
    }

    newKeyPressed(code: string): void {
        if (this.inputManager.isValidLetter(code, this.position, this.maxWordSize)) {
            const letter = this.inputManager.transformCodeToLetter(code);
            this.ui.setNewLetter(this.turn, this.position, letter);
            this.actualWord += letter;
            this.position++;
        }

        if (this.inputManager.isEnterKey(code)) {
            if (this.actualWord.length === this.maxWordSize) {
                if (this.resultManager.checkVictory(this.actualWord, this.pickedWord)) {
                    this.resultManager.handleVictory();
                } else if (this.turn === this.maxAttempts) {
                    this.resultManager.handleGameOver();
                } else {
                    this.wordValidator.checkWord(this.actualWord, this.pickedWord, this.turn, this.ui);
                    this.turn++;
                    this.position = 0;
                    this.actualWord = "";
                }
            }
        }

        if (this.inputManager.isBackspaceKey(code) && this.position > 0) {
            this.position--;
            this.actualWord = this.actualWord.slice(0, -1);
            this.ui.deleteLetter(this.turn, this.position);
        }
        this.ui.changeKeyColor(code);
    }
}
   