import { ICheck } from "./ICheck.js";
import { Interface } from "../core/Interface.js";
import { WordState } from "../core/WordCheckerData.js";


export class CheckRightLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "right";
    }
    
    checkLetters(wordData: WordState)  {
        var { pickedWord, actualWord, letterCount, markedPositions, turn } = wordData;

        for (let i = 0; i < pickedWord.length; i++) {
            const letter = actualWord[i];
            const count = letterCount.get(letter) ?? 0;

            if (this.isCorrectlyPlacedLetter(pickedWord[i], letter)) {
                letterCount.set(letter, count - 1);                 
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
                markedPositions.set(i, true);
            }
        }
    }

    private isCorrectlyPlacedLetter(pickedLetter: string, actualLetter: string): boolean {
        return pickedLetter === actualLetter;
    }

}
