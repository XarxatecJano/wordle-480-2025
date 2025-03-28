import { IFactory } from "../Interfaces/IFactory.js";
import { Word } from "./Word.js";

export class WordFactory implements IFactory<string,Word> {
    
    private static _instance: WordFactory;
    static getInstance(): WordFactory {
        if (this._instance == null) {
            this._instance = new WordFactory();
        }
        return this._instance;
    }

    create(word: string): Word {
       return new Word(word);
    }

    createEmptyObject(): Word {
        return new Word("");
    }

    getRandomWord(words: string[]): string {
        const min = 0;
        const max = words.length-1;
        return words[Math.floor(Math.random() * (max - min + 1))]
    }

}