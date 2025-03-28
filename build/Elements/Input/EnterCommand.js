import { MAX_WORD_SIZE } from "../../env.js";
import { ControllerGame } from "../../Game/ControllerGame.js";
export class EnterCommand {
    constructor(actualWord, wordManager) {
        this._actualWord = actualWord;
        this._wordManager = wordManager;
    }
    getVariable() {
        this._actualWord = this._wordManager.letterManager.actualWord;
        this._pickedWord = this._wordManager.letterManager.pickedWord;
        this._turn = this._wordManager.letterManager.turn;
    }
    execute() {
        this.getVariable();
        if (this._actualWord.Word.length == MAX_WORD_SIZE) {
            new ControllerGame(this._actualWord, this._pickedWord, this._turn).checkGame();
            this._wordManager.updateAfterANewWord();
        }
    }
}
