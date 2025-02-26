import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";


export class CheckRightLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }

    checkType(): string {
        return "right";
    }
    
    check(actualWord: string, pickedWord: string, turn: number, letterCount: Record<string, number>, markedPositions: Record<number, boolean>)  {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === actualWord[i]) {
                letterCount[actualWord[i]]--; 
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
                markedPositions[i] = true;

            }
        }
    }

}
