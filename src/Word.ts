import { Letter } from "Letter.js"
import { MAX_WORD_SIZE } from "./env";

export class Word {
    private word: Letter[];

    constructor(word: Letter[]) {
        this.word = word;
    }

    public addLetter(letter: Letter) {
        if (this.getPosition()<MAX_WORD_SIZE){
            this.word.push(letter);
        }
    }

    public removeLastLetter(): Letter | null {
        let letter: Letter | null = null;
        if (this.getPosition()!=0){
            letter = this.word.pop()!;
        }
        return letter;
    }

    public getLetterAtIndex(index: number): Letter {
        return this.word[index];
    }

    public getWordString(): string {
        let wordString = "";
        for (let letter of this.word){
            wordString.concat(letter.getChar());
        }
        return wordString
    }

    public numberOfCoincidences(pattern: RegExp): number {
        return (this.getWordString().match(pattern) || []).length;
    }

    public getPosition():number{
        return this.word.length;
    }
}