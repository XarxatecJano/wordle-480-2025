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
    
    check(wordData: WordState)  {
        for (let i = 0; i < wordData.pickedWord.length; i++) {
            if (wordData.pickedWord[i] === wordData.actualWord[i]) {
                wordData.letterCount[wordData.actualWord[i]]--; 
                this.interface.changeBackgroundPosition(wordData.turn, i, "rightLetter");
                wordData.markedPositions[i] = true;

            }
        }
    }

}
