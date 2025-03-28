import { RESULT_CLASS_LETTERS } from "../../env.js";
import { UIBoard } from "../../UI/UIBoard.js";
import { Letter } from "../Letter/Letter.js";
import { LetterManager } from "../Letter/LetterManager.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "./Word.js";
import { WordFactory } from "./WordFactory.js";

export class WordManager {

    private _actualWord: Word
    private _pickedWord: Word
    private _letterManager!: LetterManager
    private _turn: Turn
    private readonly _board: UIBoard
    
    constructor(
        actualWord: Word,
        pickedWord: Word,
        turn: Turn,
        board: UIBoard
    ) {
        this._actualWord = actualWord;
        this._pickedWord = pickedWord;
        this._turn = turn;
        this._board = board;
    }

    get letterManager() {return this._letterManager}
    set letterManager(letterManager: LetterManager) {this._letterManager = letterManager}
    get actualWord() {return this._actualWord}

    checkWord = (): void=> {
        this._pickedWord = this._letterManager.pickedWord;
        this._actualWord = this._letterManager.actualWord;

        let results: Letter[] = this._actualWord.Letters.map(letter => new Letter(letter.Letter, RESULT_CLASS_LETTERS.UNDEFINED));
        this._pickedWord.setFrecuencyLetter();
        this._letterManager.checkLetters(this._actualWord.Letters,results);
        this.addResultsToInterface(results);
    }

    updateAfterANewWord = ():void=>{
        this.checkWord();
        this._turn = this._letterManager.turn;

        this._turn.add(1);
        this._turn.Position.set(0);
        this._actualWord = WordFactory.getInstance().createEmptyObject()

        this._letterManager.actualWord = this._actualWord;

        console.log("Posicion: " + this._turn.Position.position);
        console.log("Turno: " + this._turn.turn);
    }

    addResultsToInterface(results: Letter[]) {
        for (let i = 0; i < results.length; i++) {
            let result = results[i].Status;
            this._board.changeBackgroundPosition(this._turn.turn, i, result!);
        }
    }
}