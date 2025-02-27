import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "../controllers/Letter.js";
import { Checker } from "../controllers/Checker.js";
import { UpdateManager } from "../controllers/UpdateManager.js";

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

    public static getInstance(pickedWord: string): Game {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    }
    newLetter(code: string): void {
        let letter: string = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this._checker.turn, this._checker.currentPosition, letter);
        this._updateElementsManager.nextPosition();
        this._checker.actualWord += letter;
    }
    enterPressed(): void {
        if (this._checker.actualWord.length == MAX_WORD_SIZE) {
            this._checker.checkWordIsRight();
            this._checker.checkGameIsOver();
            this._updateElementsManager.updateAfterNewWord();

        }
    }

    backspacePressed(): void {
        if (this._checker.currentPosition > 0) {
            this._checker.currentPosition -= 1;
            this._checker.actualWord = this._checker.actualWord.slice(0, this._checker.actualWord.length - 1);
            this._interface.deleteLetter(this._checker.turn, this._checker.currentPosition);
        }
    }

    newKeyPressed(code: string): void {
        if (this._checker.isValidLetter(code) && this._checker.currentPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (this._letterManager.isEnterKey(code)) this.enterPressed();
        if (this._letterManager.isBackspaceKey(code)) this.backspacePressed();
    }


}
