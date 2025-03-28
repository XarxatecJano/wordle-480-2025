import { RESULT_CLASS_LETTERS } from "../../../env.js";
import { AdvancedMap } from "../../AdvancedMap.js";
import { ILetterCondition } from "../../Interfaces/ILetterCondition.js";
import { Letter } from "../Letter.js";

export class WrongLetterCondition implements ILetterCondition {

    private readonly _frecuencyMap: AdvancedMap<string, number>
    constructor(frecuencyMap: AdvancedMap<string,number>) {
        this._frecuencyMap = frecuencyMap;
    }

    checkCondition(userLetter: Letter, targetLetter: Letter, result: Letter): boolean {
        if (result.isObjectDistinctFrom(RESULT_CLASS_LETTERS.RIGHT)) {
            if (this._frecuencyMap.getOrDefault(userLetter.Letter,0) > 0) {
                let frecuency = this._frecuencyMap.getOrDefault(userLetter.Letter,0);
                result.set(RESULT_CLASS_LETTERS.MISPLACED);
                this._frecuencyMap.set(userLetter.Letter,frecuency - 1);
                return true;
            } else {
                result.set(RESULT_CLASS_LETTERS.WRONG);
            }
        }
        return false;
    }
}