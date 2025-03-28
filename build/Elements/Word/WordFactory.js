import { Word } from "./Word.js";
export class WordFactory {
    static getInstance() {
        if (this._instance == null) {
            this._instance = new WordFactory();
        }
        return this._instance;
    }
    create(word) {
        return new Word(word);
    }
    createEmptyObject() {
        return new Word("");
    }
    getRandomWord(words) {
        const min = 0;
        const max = words.length - 1;
        return words[Math.floor(Math.random() * (max - min + 1))];
    }
}
