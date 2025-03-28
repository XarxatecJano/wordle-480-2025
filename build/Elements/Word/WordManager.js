import { Letter } from "../Letter/Letter.js";
import { WordFactory } from "./WordFactory.js";
export class WordManager {
    constructor(actualWord, pickedWord, turn, board) {
        this.checkWord = () => {
            this._pickedWord = this._letterManager.pickedWord;
            this._actualWord = this._letterManager.actualWord;
            let results = this._actualWord.Letters.map(letter => new Letter(letter.Letter, "" /* UNDEFINED */));
            this._pickedWord.setFrecuencyLetter();
            this._letterManager.checkLetters(this._actualWord.Letters, results);
            this.addResultsToInterface(results);
        };
        this.updateAfterANewWord = () => {
            this.checkWord();
            this._turn = this._letterManager.turn;
            this._turn.add(1);
            this._turn.Position.set(0);
            this._actualWord = WordFactory.getInstance().createEmptyObject();
            this._letterManager.actualWord = this._actualWord;
            console.log("Posicion: " + this._turn.Position.position);
            console.log("Turno: " + this._turn.turn);
        };
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._turn = turn;
        this._board = board;
    }
    get letterManager() { return this._letterManager; }
    set letterManager(letterManager) { this._letterManager = letterManager; }
    get actualWord() { return this._actualWord; }
    addResultsToInterface(results) {
        for (let i = 0; i < results.length; i++) {
            let result = results[i].Status;
            this._board.changeBackgroundPosition(this._turn.turn, i, result);
        }
    }
}
