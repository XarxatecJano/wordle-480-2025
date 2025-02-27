import { ICheck } from "./ICheck.js";
import { Interface } from "../core/Interface.js";
import { WordState } from "../core/WordCheckerData.js";

export class CheckMisplacedLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "misplaced";
    }

    checkLetters(wordData: WordState) {
        var { pickedWord, actualWord, letterCount, markedPositions, turn } = wordData;

        for (let i = 0; i < pickedWord.length; i++) {
            const letter = actualWord[i];
            const count = letterCount.get(letter) ?? 0; 

            if (this.isMisplacedLetter(letter, pickedWord[i], letterCount)) {
                
                letterCount.set(letter, count - 1);
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                markedPositions.set(i, true);
            }
        }
    }

    private isMisplacedLetter(letter: string, correctLetter: string, letterCount: Map<string, number>): boolean {
        return letter !== correctLetter && (letterCount.get(letter) ?? 0) > 0;
    }
    
}

