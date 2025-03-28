import { Util } from "../../Util.js";
export class LetterManager {
    constructor(letterConditions, board, turn, actualWord, pickedWord, keyboard) {
        this._letterConditions = letterConditions;
        this._board = board;
        this._turn = turn;
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._keyboard = keyboard;
    }
    get turn() { return this._turn; }
    set turn(turn) { this._turn = turn; }
    get actualWord() { return this._actualWord; }
    set actualWord(actualWord) { this._actualWord = actualWord; }
    get pickedWord() { return this._pickedWord; }
    set pickedWord(pickedWord) { this._pickedWord = pickedWord; }
    newLetter(code) {
        let letter = Util.transformCodeToLetter(code, "y");
        this._board.setLetter(this._turn.turn, this._turn.Position.position, letter);
        this._turn.Position.add(1);
        this._actualWord.addLetter(letter);
        console.log(this._actualWord.Word);
    }
    checkLetters(letters, results) {
        for (let i = 0; i < letters.length; i++) {
            for (const condition of this._letterConditions) {
                condition.checkCondition(letters[i], this._pickedWord.Letters[i], results[i]);
            }
        }
    }
    deleteOneLetter() {
        this._turn.Position.subtract(1);
        this._keyboard.deleteOneLetterForKeyboard(this._actualWord.getLastLetter());
        this._actualWord.removeLastLetter();
        this._board.setLetter(this._turn.turn, this._turn.Position.position, "");
    }
}
