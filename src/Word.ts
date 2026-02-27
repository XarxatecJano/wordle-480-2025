import { Palabra } from "./Palabra.js";

export class Word {
    private _words: Palabra[];

    constructor(wordsArray: string[]) {
        this._words = wordsArray.map(word => new Palabra(word));
    }

    get palabras(): Palabra[] {
        return this._words;
    }

    getRandomWord(): Palabra {
        const index = Math.floor(Math.random() * this._words.length);
        return this._words[index];
    }
}
