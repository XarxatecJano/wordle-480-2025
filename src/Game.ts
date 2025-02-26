import { MAX_WORD_SIZE } from "./env.js";
import { Interface } from "./Interface.js";
import { Letter } from "./Letter.js";
import { Checker } from "./Checker.js";
import { UpdateManager } from "./UpdateManager.js";

export class Game {
    private static _instance: Game;
    private _validLetterCodes: Letter
    private _checker: Checker
    private _interface: Interface
    private _updateElementsManager: UpdateManager
    constructor(pickedWord: string) {

        this._checker = new Checker(pickedWord);
        this._validLetterCodes = new Letter();
        this._interface = new Interface();
        this._updateElementsManager = new UpdateManager(this._checker);

    }
    public static getInstance(pickedWord: string): Game {
        if (!Game._instance) {
            Game._instance = new Game(pickedWord);
        }
        return Game._instance;
    }

    get checker() {
        return this._checker;
    }
    set checker(checker) {
        this._checker = checker;
    }

    


    newLetter(code: string): void {
        let letter: string = this._validLetterCodes.transformCodeToLetter(code);
        this._interface.setNewLetter(this.checker.turn, this._checker.actualPosition, letter);
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
        if (this.checker.actualPosition > 0) {
            this.checker.actualPosition -= 1;
            this._interface.resetBackgroundKeys(this.checker.actualWord, this.checker.actualLetters);
            this.checker.actualWord = this.checker.actualWord.slice(0, this.checker.actualWord.length - 1);
            this._interface.deleteLetter(this.checker.turn, this.checker.actualPosition);
        }
    }

    newKeyPressed(code: string): void {
        if (this._checker.isValidLetter(code) && this.checker.actualPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
            this._interface.changeBackgroundKey(code);
        }
        if (this._validLetterCodes.isEnterKey(code)) this.enterPressed();
        if (this._validLetterCodes.isBackspaceKey(code)) this.backspacePressed();
    }


}
