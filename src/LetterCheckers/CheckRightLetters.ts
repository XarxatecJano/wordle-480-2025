import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";


export class CheckRightLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }


    check(actualWord: string, pickedWord: string, turn: number) {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (pickedWord[i] === actualWord[i]) {
                this.interface.changeBackgroundPosition(turn, i, "rightLetter");
            }
        }
    }

}
