import { IFactory } from "../Interfaces/IFactory.js";
import { ILetterCondition } from "../Interfaces/ILetterCondition.js";
import { Word } from "../Word/Word.js";
import { RightLetterCondition } from "./LetterConditions/RightLetterCondition.js";
import { WrongLetterCondition } from "./LetterConditions/WrongLetterCondition.js";

export class LetterConditionsFactory implements IFactory<void,ILetterCondition[]>{

    private static _instance: LetterConditionsFactory
    private readonly _conditions: ILetterCondition[]

    constructor (pickedWord: Word) {
        this._conditions = [
            new RightLetterCondition(pickedWord.FrecuencyLetter),
            new WrongLetterCondition(pickedWord.FrecuencyLetter)
        ]
    }

    create(): ILetterCondition[] {
        return this._conditions;
    }

    static getInstance(pickedWord: Word): LetterConditionsFactory {
        if (this._instance == null) {
            this._instance = new LetterConditionsFactory(pickedWord);
        }
        return this._instance;
    }
}