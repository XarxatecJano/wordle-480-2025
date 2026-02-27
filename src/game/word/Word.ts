import { Letter } from "./Letter.js";
import { MAX_WORD_SIZE } from "../../env.js";

export class Word {
    private word: Letter[];

    constructor(word: Letter[]) {
        this.word = word;
    }

    addLetter(letter: Letter) {
        if (this.getSize() < MAX_WORD_SIZE) {
            this.word.push(letter);
        }
    }

    removeLastLetter(): Letter | null {
        let letter: Letter | null = null;
        if (this.getSize() != 0) {
            letter = this.word.pop()!;
        }
        return letter;
    }

    getLetterAtIndex(index: number): Letter {
        return this.word[index];
    }

    getWordString(): string {
        let wordString = "";
        for (let letter of this.word) {
            wordString += (letter.getChar());
        }
        return wordString;
    }

    getLetters(): Letter[] {
        return this.word;
    }

    numberOfCoincidences(pattern: RegExp): number {
        return (this.getWordString().match(pattern) || []).length;
    }

    getSize(): number {
        return this.word.length;
    }

    equals(otherWord: Word): boolean {
        if (this.getSize() != otherWord.getSize()) {
            return false;
        }
        const myLetters = this.getLetters();
        const otherLetters = otherWord.getLetters();
        for (let i = 0; i < this.getSize(); i++) {
            if (!myLetters[i].equals(otherLetters[i])) {
                return false;
            }
        }
        return true;
    }
}