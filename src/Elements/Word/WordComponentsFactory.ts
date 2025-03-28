import { IFactory } from "../Interfaces/IFactory.js";
import { LetterConditionsFactory } from "../Letter/LetterConditionsFactory.js";
import { LetterManager } from "../Letter/LetterManager.js";
import { Turn } from "../Turn/Turn.js";
import { Word } from "./Word.js";
import { WordFactory } from "./WordFactory.js";
import { WordManager } from "./WordManager.js";
import { WORDS } from "../../env.js";
import { UIComponents } from "../../UI/UIFactory.js";

export class WordComponents {
    constructor(
        public readonly wordManager: WordManager,
        public readonly letterManager: LetterManager,
        public readonly pickedWord: Word,
        public readonly actualWord: Word,
        public readonly turn: Turn
    ) {}
}

export class WordComponentsFactory implements IFactory<UIComponents,WordComponents> {

    private static _instance: WordComponentsFactory;
    static getInstance(): WordComponentsFactory {
        if (this._instance == null) {
            this._instance = new WordComponentsFactory();
        }
        return this._instance;
    }

    create(object: UIComponents): WordComponents {
        let wordFactory: WordFactory = WordFactory.getInstance();
        const pickedWord: string = wordFactory.getRandomWord(WORDS);
        let actualWord = wordFactory.createEmptyObject();

        console.log(pickedWord);

        let pickedWord1 = new Word(pickedWord);
        let turn = new Turn(1,0);

        let wordManager = new WordManager(actualWord,pickedWord1,turn,object.board);
        let letterManager = new LetterManager (
            LetterConditionsFactory.getInstance(pickedWord1).create(),
            object.board,
            turn,
            actualWord,
            pickedWord1,
            object.keyboard);

        wordManager.letterManager = letterManager;

        return new WordComponents(
            wordManager,
            letterManager,
            pickedWord1,
            actualWord,
            turn);
    }
    
}