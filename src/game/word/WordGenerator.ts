import { Word } from "./Word.js";
import { Letter } from "./Letter.js";

export class WordGenerator {
    private _words: Word[];

    constructor(wordsArray: string[]) {
        this._words = this.generateWordsFromStrings(wordsArray);
    }

    get Words() {
        return this._words;
    }
    set Words(wordsArray: Word[]) {
        this._words = wordsArray;
    }

    generateWordsFromStrings(array: string[]): Word[] {
        let words: Word[] = [];
        for (let string of array) {
            let letters: Letter[] = [];
            for (let char of string) {
                letters.push(new Letter(char));
            }
            words.push(new Word(letters));
        }
        return words;
    }

    getRandomWord(): Word {
        const min = 0;
        const max = this._words.length - 1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))]
    }
}