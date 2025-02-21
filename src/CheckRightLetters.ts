import { ICheck } from "./ICheck";
import { Interface } from "./Interface";

const MAX_WORD_SIZE:number = 5;


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

    /*checkMisplacedLetters(actualWord, pickedWord, turn) {
        let actualLetter = "";
        let pattern;
        let numberOfCoincidences = 0;
        let isMisplacedLetter;

        for (let i = 0; i < this.maxWordSize; i++) {
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

    checkWrongLetters(actualWord, pickedWord, turn) {
        let actualLetter = "";
        let pattern;
        let numberOfCoincidences = 0;

        for (let i = 0; i < this.maxWordSize; i++) {
            actualLetter = actualWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidences = (pickedWord.match(pattern) || []).length;
            if (numberOfCoincidences === 0) {
                this.interface.changeBackgroundPosition(turn, i, "wrongLetter");
            }
        }
    }*/
}
