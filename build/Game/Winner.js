import { WinnerLocation } from "../Elements/Location/WinnerLocation.js";
export class Winner {
    constructor(actualWord, pickedWord) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
    }
    locationAssign() {
        new WinnerLocation().assign();
    }
    isTrueCondition() {
        return this._actualWord.Word == this._pickedWord.Word;
    }
}
