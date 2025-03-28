import { INPUT_KEYS, MAX_WORD_SIZE, VALID_LETTER_CODES } from "../../env.js";
import { UIKeyboard } from "../../UI/UIKeyboard.js";
import { AdvancedMap } from "../AdvancedMap.js";
import {IInputHandler} from "../Interfaces/IInputHandler.js"
import { IRelayCommand } from "../Interfaces/IRelayCommand.js";
import { LetterManager } from "../Letter/LetterManager.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "../Word/Word.js";
import { WordManager } from "../Word/WordManager.js";
import { BackspaceCommand } from "./BackspaceCommand.js";
import { EnterCommand } from "./EnterCommand.js";

export class InputKeyPressed implements IInputHandler {
    
    private readonly _validLetterCodes: string[] = VALID_LETTER_CODES
    private readonly keyCommands: AdvancedMap<string, IRelayCommand> = new AdvancedMap();

    private _letterManager!: LetterManager
    private _turn!: Turn
    private _actualWord!: Word
    private _wordManager!: WordManager
    private readonly _keybard: UIKeyboard

    set letterManager(letterManager: LetterManager) {this._letterManager = letterManager}
    set turn(turn: Turn) {this._turn = turn}
    set actualWord(word: Word) {this._actualWord = word}
    set wordManager(wordManager: WordManager) {this._wordManager = wordManager}

    constructor(keyboard: UIKeyboard) {
        this._keybard = keyboard;
    }

    initializeCommands() {
        this.keyCommands.set(INPUT_KEYS.ENTER, new EnterCommand(this._actualWord, this._wordManager));
        this.keyCommands.set(INPUT_KEYS.BACKSPACE, new BackspaceCommand(this._turn, this._letterManager));
    }

    isValidCodeLetter(code: string): boolean {
        return this._validLetterCodes.includes(code) && this._turn.Position.position < MAX_WORD_SIZE;
    }

    newKeyPressed(code: string):void{
        let isPressed =  this.OnKeyPress(code);
        if (this._actualWord.Word.length <= MAX_WORD_SIZE && isPressed) this._keybard.changeBackgroundKey(code);
    }

    OnKeyPress(code: string): boolean {
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