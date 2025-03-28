import { MAX_WORD_SIZE, VALID_LETTER_CODES } from "../../env.js";
import { AdvancedMap } from "../AdvancedMap.js";
import { BackspaceCommand } from "./BackspaceCommand.js";
import { EnterCommand } from "./EnterCommand.js";
export class InputKeyPressed {
    constructor(keyboard) {
        this._validLetterCodes = VALID_LETTER_CODES;
        this.keyCommands = new AdvancedMap();
        this._keybard = keyboard;
    }
    set letterManager(letterManager) { this._letterManager = letterManager; }
    set turn(turn) { this._turn = turn; }
    set actualWord(word) { this._actualWord = word; }
    set wordManager(wordManager) { this._wordManager = wordManager; }
    initializeCommands() {
        this.keyCommands.set("Enter" /* ENTER */, new EnterCommand(this._actualWord, this._wordManager));
        this.keyCommands.set("Backspace" /* BACKSPACE */, new BackspaceCommand(this._turn, this._letterManager));
    }
    isValidCodeLetter(code) {
        return this._validLetterCodes.includes(code) && this._turn.Position.position < MAX_WORD_SIZE;
    }
    newKeyPressed(code) {
        let isPressed = this.OnKeyPress(code);
        if (this._actualWord.Word.length <= MAX_WORD_SIZE && isPressed)
            this._keybard.changeBackgroundKey(code);
    }
    OnKeyPress(code) {
        if (this.isValidCodeLetter(code)) {
            this._letterManager.newLetter(code);
            return true;
        }
        const command = this.keyCommands.get(code);
        if (command) {
            command.execute();
            return false;
        }
        return false;
    }
}
