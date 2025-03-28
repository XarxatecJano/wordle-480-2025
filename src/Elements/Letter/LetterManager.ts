import { UIBoard } from "../../UI/UIBoard.js";
import { UIKeyboard } from "../../UI/UIKeyboard.js";
import { Util } from "../../Util.js";
import { ILetterCondition } from "../Interfaces/ILetterCondition.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "../Word/Word.js";
import { Letter } from "./Letter.js";

export class LetterManager {
    
    private readonly _letterConditions: ILetterCondition[]
    private readonly _board: UIBoard;
    private _turn: Turn;
    private _actualWord: Word;
    private _pickedWord: Word;
    private readonly _keyboard: UIKeyboard

    constructor (
        letterConditions: ILetterCondition[],
        board: UIBoard,
        turn: Turn,
        actualWord: Word,
        pickedWord: Word,
        keyboard: UIKeyboard
    ) {
        this._letterConditions = letterConditions;
        this._board = board;
        this._turn = turn;
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._keyboard = keyboard;
    }

    get turn() {return this._turn}
    set turn(turn: Turn) {this._turn = turn}
    get actualWord() {return this._actualWord}
    set actualWord(actualWord: Word) {this._actualWord = actualWord}
    get pickedWord() {return this._pickedWord}
    set pickedWord(pickedWord: Word) {this._pickedWord = pickedWord}

    newLetter(code: string):void{
        let letter: string = Util.transformCodeToLetter(code,"y");
        this._board.setLetter(this._turn.turn, this._turn.Position.position, letter);
        this._turn.Position.add(1);
        this._actualWord.addLetter(letter);
        console.log(this._actualWord.Word);
    }

    checkLetters(letters: Letter[], results: Letter[]) {
        for (let i = 0; i < letters.length; i++) {
           for (const condition of this._letterConditions) {
                condition.checkCondition(letters[i],this._pickedWord.Letters[i],results[i]);
           }
        }
    }

    deleteOneLetter():void {
        this._turn.Position.subtract(1);
        this._keyboard.deleteOneLetterForKeyboard(this._actualWord.getLastLetter());
        this._actualWord.removeLastLetter();
        this._board.setLetter(this._turn.turn, this._turn.Position.position,"");
    }
}