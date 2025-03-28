import { MAX_WORD_SIZE } from "../../env.js";
import { ControllerGame } from "../../Game/ControllerGame.js";
import { IRelayCommand } from "../Interfaces/IRelayCommand.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "../Word/Word.js";
import { WordManager } from "../Word/WordManager.js";

export class EnterCommand implements IRelayCommand {

    private _actualWord: Word
    private readonly _wordManager: WordManager
    private _pickedWord!: Word
    private _turn!: Turn
    constructor(
        actualWord: Word,
        wordManager: WordManager
    ) {
        this._actualWord = actualWord;
        this._wordManager = wordManager;
    }

    getVariable(): void {
        this._actualWord = this._wordManager.letterManager.actualWord;
        this._pickedWord = this._wordManager.letterManager.pickedWord
        this._turn = this._wordManager.letterManager.turn
    }
    
    execute(): void {
        this.getVariable();

        if (this._actualWord.Word.length == MAX_WORD_SIZE){
            new ControllerGame(this._actualWord,this._pickedWord,this._turn).checkGame();
            this._wordManager.updateAfterANewWord();
        }
    }
}