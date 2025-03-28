import { RightLetterCondition } from "./LetterConditions/RightLetterCondition.js";
import { WrongLetterCondition } from "./LetterConditions/WrongLetterCondition.js";
export class LetterConditionsFactory {
    constructor(pickedWord) {
        this._conditions = [
            new RightLetterCondition(pickedWord.FrecuencyLetter),
            new WrongLetterCondition(pickedWord.FrecuencyLetter)
        ];
    }
    create() {
        return this._conditions;
    }
    static getInstance(pickedWord) {
        if (this._instance == null) {
            this._instance = new LetterConditionsFactory(pickedWord);
        }
        return this._instance;
    }
}
