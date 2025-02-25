import { Letter } from "Letter.js"
import { MAX_WORD_SIZE } from "./env.js";
import { KeyState } from "./KeyState.js";

export class Word {
    private word: Letter[];

    constructor(word: Letter[]) {
        this.word = word;
    }

    public addLetter(letter: Letter) {
        if (this.getSize() < MAX_WORD_SIZE) {
            this.word.push(letter);
        }
    }

    public removeLastLetter(): Letter | null {
        let letter: Letter | null = null;
        if (this.getSize() != 0) {
            letter = this.word.pop()!;
        }
        return letter;
    }

    public getLetterAtIndex(index: number): Letter {
        return this.word[index];
    }

    public getWordString(): string {
        let wordString = "";
        for (let letter of this.word) {
            wordString += (letter.getChar());
        }
        return wordString;
    }

    getLetters(): Letter[] {
        return this.word;
    }

    public numberOfCoincidences(pattern: RegExp): number {
        return (this.getWordString().match(pattern) || []).length;
    }

    public getSize(): number {
        return this.word.length;
    }

    public equals(otherWord: Word): boolean {
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

    public checkLetter(letter: Letter, position: number): KeyState {
        if (position < 0 || position >= this.getSize()) {
            console.log('letter: %s position: %d state: %s', letter.getCode, position, KeyState.UNUSED);
            return KeyState.UNUSED;
        }
        if (this.getLetterAtIndex(position).equals(letter)) {
            console.log('letter: %s position: %d state: %s', letter.getCode, position, KeyState.RIGHT);
            return KeyState.RIGHT;
        }
        for (let wordLetter of this.word) {
            if (wordLetter.equals(letter)) {
                console.log('letter: %s position: %d state: %s', letter.getCode, position, KeyState.MISPLACED);
                return KeyState.MISPLACED;
            }
        }
        return KeyState.USED;
    }
}