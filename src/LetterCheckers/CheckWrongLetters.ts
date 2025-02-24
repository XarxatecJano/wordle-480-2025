import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";

export class CheckWrongLetters implements ICheck{
    
    private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }


    check(actualWord: string, pickedWord: string, turn: number) {
        let actualLetter = "";
        let pattern;
        let numberOfCoincidences = 0;

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences === 0) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    }
}
