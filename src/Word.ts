import { IWordProvider } from "./IWordProvider";

export class Word implements IWordProvider {
    private words: string[];

    constructor(wordsArray: string[]) {
        this.words = wordsArray
    }

    getWords(): string[] {
        return this.words;
    }
    getRandomWord(): string {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
        

}