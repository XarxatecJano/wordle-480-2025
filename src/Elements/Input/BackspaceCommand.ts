import { IRelayCommand } from "../Interfaces/IRelayCommand.js";
import { LetterManager } from "../Letter/LetterManager.js";
import { Turn } from "../Turn/Turn.js";

export class BackspaceCommand implements IRelayCommand{

    private _turn: Turn;
    private _letterManager: LetterManager
    constructor(
        turn: Turn,
        letterManager: LetterManager
    ) {
        this._letterManager = letterManager;
        this._turn = turn;
    }
    
    execute(): void {
        if (this._turn.Position.position > 0) this._letterManager.deleteOneLetter();
    }
}