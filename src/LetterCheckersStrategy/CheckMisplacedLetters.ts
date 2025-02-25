import { ICheck } from "./ICheck";
import { Interface } from "../Interface";
import { MAX_WORD_SIZE } from "../env.js";

export class CheckMisplacedLetters implements ICheck{
    
    private interface: Interface;
    private lettersStates: [];

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
        this.lettersStates = []
    }

    check(actualWord: string, pickedWord: string, turn: number) {
        let actualLetter = "";
        let pattern;
        let numberOfCoincidences = 0;
        let isMisplacedLetter;

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (pickedWord.match(pattern) || []).length;
            if (pickedWord[i] === actualWord[i]) isMisplacedLetter = false;
            if (numberOfCoincidences > 0 && isMisplacedLetter) {
                this.interface.changeBackgroundPosition(turn, i, "misplacedLetter");
                
            }
        }
    }
}