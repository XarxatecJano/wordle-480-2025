import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "./Letter.js";
import { Checker } from "./Checker.js";
import { UpdateManager } from "./UpdateManager.js";

export class Game {
    private static _instance: Game;
    private _letterManager: Letter
    private _checker: Checker
    private _interface: Interface
    private _updateElementsManager: UpdateManager
    constructor(pickedWord: string) {

        this._checker = Checker.getInstance(pickedWord);
        this._letterManager = Letter.getInstance();
        this._interface = new Interface();
        this._updateElementsManager = UpdateManager.getInstance(this._checker);

    }


    get checker() {
        return this._checker;
    }
    set checker(checker) {
        this._checker = checker;
    }
    public static getInstance(pickedWord: string): Game {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    }
    newLetter(code: string): void {
        let letter: string = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.currentPosition, letter);
        this._updateElementsManager.nextPosition();
        this.checker.actualWord += letter;
    }
    enterPressed(): void {
        if (this.checker.actualWord.length == MAX_WORD_SIZE) {
            this.checker.checkWordIsRight();
            this.checker.checkGameIsOver();
            this._updateElementsManager.updateAfterNewWord();

        }
    }

    backspacePressed(): void {
        if (this.checker.currentPosition > 0) {
            this.checker.currentPosition -= 1;
            this.checker.actualWord = this.checker.actualWord.slice(0, this.checker.actualWord.length - 1);
            this._interface.deleteLetter(this.checker.turn, this.checker.currentPosition);
        }
    }

    newKeyPressed(code: string): void {
        if (this._checker.isValidLetter(code) && this.checker.currentPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (this._letterManager.isEnterKey(code)) this.enterPressed();
        if (this._letterManager.isBackspaceKey(code)) this.backspacePressed();
    }


}
