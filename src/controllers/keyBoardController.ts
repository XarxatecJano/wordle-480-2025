import { IGameChecker } from "../interfaces/IGameChecker.js";
import { Checker } from "../checkers/WordChecker.js";
import { MAX_WORD_SIZE } from "../core/env";
import { Interface } from "../core/Interface";
import { UpdateManager } from "./UpdateManager.js";
import { Letter } from "./LetterController.js";
import { PositionManager } from "./PositionController.js";



export class KeyBoardController {
    private _checker: IGameChecker;
    private _letterManager: Letter
    private _interface: Interface
    private _updateElementsManager: UpdateManager
        private _positionManager: PositionManager
        constructor(pickedWord: string) {
            this._checker = Checker.getInstance(pickedWord);
            this._letterManager = Letter.getInstance();
            this._interface = new Interface;
            this._positionManager = PositionManager.getInstance();
            this._updateElementsManager = UpdateManager.getInstance(this._checker);
    
        }
    
    newLetter(code: string): void {
        let letter: string = this._letterManager.transformCodeToLetter(code);
        this._interface.setNewLetter(this._checker.turn, this._positionManager.currentPosition, letter);
        this._positionManager.nextPosition();
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
        if (this._positionManager.currentPosition > 0) {
            this._positionManager.currentPosition -= 1;
            this._checker.actualWord = this._checker.actualWord.slice(0, this._checker.actualWord.length - 1);
            this._interface.deleteLetter(this._checker.turn, this._positionManager.currentPosition);
        }
    }

    setNewKey(code: string): void {
        if (this._letterManager.isValidLetter(code) && this._positionManager.currentPosition < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (this._letterManager.isEnterKey(code)) this.enterPressed();
        if (this._letterManager.isBackspaceKey(code)) this.backspacePressed();
    }

}