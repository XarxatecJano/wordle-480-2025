import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";

export class CheckWrongLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "wrong";
    }

    check(actualWord: string, pickedWord: string, turn: number, letterCount: Record<string, number>, markedPositions: Record<number, boolean>) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (!(actualWord[i] in letterCount) || (letterCount[actualWord[i]] == 0 && !markedPositions[i])){
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    }
}
