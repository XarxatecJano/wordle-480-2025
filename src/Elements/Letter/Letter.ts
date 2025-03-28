import { RESULT_CLASS_LETTERS } from "../../env.js";
import { BaseTools } from "../Abstracts/BaseTools.js";
import { IModifiable } from "../Interfaces/IModifiable.js";

export class Letter extends BaseTools<Letter,RESULT_CLASS_LETTERS> implements IModifiable<RESULT_CLASS_LETTERS> {
    
    private _str: string
    private _status: RESULT_CLASS_LETTERS | null;

    constructor(str: string, status: RESULT_CLASS_LETTERS | null = null) {
        super();
        this._str = str;
        this._status = status;
    }

    set(status: RESULT_CLASS_LETTERS): void {
        this.Status = status;
    }
    
    override isObjectDistinctFrom(verifyState: RESULT_CLASS_LETTERS): boolean {
        return this.Status != verifyState
    }

    override isEqualTo(letter: Letter): boolean {
        return this._str == letter.Letter
    }

    get Letter(): string {return this._str}
    set Letter(letter) {this._str = letter}
    get Status(): RESULT_CLASS_LETTERS | null {return this._status}
    set Status(status: RESULT_CLASS_LETTERS | null) {this._status = status}
}