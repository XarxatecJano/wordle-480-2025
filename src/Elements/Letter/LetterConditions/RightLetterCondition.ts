import { RESULT_CLASS_LETTERS } from "../../../env.js";
import { AdvancedMap } from "../../AdvancedMap.js";
import { ILetterCondition } from "../../Interfaces/ILetterCondition.js";
import { Letter } from "../Letter.js";

export class RightLetterCondition implements ILetterCondition {
    
    private readonly _frecuencyMap: AdvancedMap<string, number>
    constructor(frecuencyMap: AdvancedMap<string,number>) {
        this._frecuencyMap = frecuencyMap;
    }

    checkCondition(userLetter: Letter, targetLetter: Letter, result: Letter): boolean {
        if (userLetter.isEqualTo(targetLetter) ) {
            result.set(RESULT_CLASS_LETTERS.RIGHT);
            this._frecuencyMap.set(userLetter.Letter, 
                this._frecuencyMap.getOrDefault(userLetter.Letter,0) - 1);
            return true;
        }
        return false;
    }
}