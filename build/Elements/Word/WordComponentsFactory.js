import { LetterConditionsFactory } from "../Letter/LetterConditionsFactory.js";
import { LetterManager } from "../Letter/LetterManager.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "./Word.js";
import { WordFactory } from "./WordFactory.js";
import { WordManager } from "./WordManager.js";
import { WORDS } from "../../env.js";
export class WordComponents {
    constructor(wordManager, letterManager, pickedWord, actualWord, turn) {
        this.wordManager = wordManager;
        this.letterManager = letterManager;
        this.pickedWord = pickedWord;
        this.actualWord = actualWord;
        this.turn = turn;
    }
}
export class WordComponentsFactory {
    static getInstance() {
        if (this._instance == null) {
            this._instance = new WordComponentsFactory();
        }
        return this._instance;
    }
    create(object) {
        let wordFactory = WordFactory.getInstance();
        const pickedWord = wordFactory.getRandomWord(WORDS);
        let actualWord = wordFactory.createEmptyObject();
        console.log(pickedWord);
        let pickedWord1 = new Word(pickedWord);
        let turn = new Turn(1, 0);
        let wordManager = new WordManager(actualWord, pickedWord1, turn, object.board);
        let letterManager = new LetterManager(LetterConditionsFactory.getInstance(pickedWord1).create(), object.board, turn, actualWord, pickedWord1, object.keyboard);
        wordManager.letterManager = letterManager;
        return new WordComponents(wordManager, letterManager, pickedWord1, actualWord, turn);
    }
}
