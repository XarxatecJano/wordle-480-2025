import { ICheck } from "./ICheck";
import { Interface } from "../core/Interface";
import { WordState } from "../core/WordCheckerData";

export class CheckWrongLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "wrong";
    }

    checkLetters(wordData: WordState) {
        var { actualWord, letterCount, markedPositions, turn } = wordData;

        for (let i = 0; i < actualWord.length; i++) {
            const letter = actualWord[i];
            if (this.isWrongLetter(letter, letterCount, markedPositions.get(i))) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    }

    private isWrongLetter(letter: string, letterCount: Map<string, number>, isMarked?: boolean): boolean {
        const count = letterCount.get(letter) ?? 0;
        return !letterCount.has(letter) || (count === 0 && !isMarked);
    }
}
