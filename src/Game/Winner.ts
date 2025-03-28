import { IControllerGame } from "../Elements/Interfaces/IControllerGame.js";
import { WinnerLocation } from "../Elements/Location/WinnerLocation.js";
import { Word } from "../Elements/Word/Word.js";

export class Winner implements IControllerGame {

    private readonly _actualWord: Word
    private readonly _pickedWord: Word

    constructor(
        actualWord: Word,
        pickedWord: Word
    ) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord
    }

    locationAssign(): void {
        new WinnerLocation().assign();
    }

    isTrueCondition(): boolean {
        return this._actualWord.Word == this._pickedWord.Word
    }
}