import { ICheck } from "./ICheck";
import { Interface } from "../Interface";

export class CheckMisplacedLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "misplaced";
    }

    check(actualWord: string, pickedWord: string, turn: number, letterCount: Record<string, number>, markedPositions: Record<number, boolean>) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] !== actualWord[i] && letterCount[actualWord[i]] > 0) {
                letterCount[actualWord[i]]--;
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                markedPositions[i] = true;
            }
        }
    }
    
}

