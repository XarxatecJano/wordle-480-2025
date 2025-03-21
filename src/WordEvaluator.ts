import { IWordEvaluator } from "./IWordEvaluator";
import { MAX_WORD_SIZE } from "./env";

export class WordEvaluator implements IWordEvaluator {

    checkRightLetters(userWord: string, targetWord: string): number[] {
        const positions: number[] = [];

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (targetWord[i] === userWord) {
                positions.push(i);
            }
        }

        return positions;
    }
    checkMisplacedLetters(userWord: string, targetWord: string): number[] {
        const positions: number[] = [];

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const letter = userWord[i];
            const pattern = new RegExp(letter, "g");
            const occurrences = (targetWord.match(pattern) || []).length;

            if (occurrences > 0 && targetWord[i] !== userWord[i]) {
                positions.push(i);
            }
        }

        return positions;
    }
    checkWrongLetters(userWord: string, targetWord: string): number[] {
        const position: number[] = [];

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            const letter = userWord[i];
            const pattern = new RegExp(letter, "g");
            const occurrences = (targetWord.match(pattern) || []).length;

            if (occurrences === 0) {
                position.push(i);
            }
        }

        return position;
    }

}