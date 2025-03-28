import { BaseTools } from "../Abstracts/BaseTools.js";
export class Letter extends BaseTools {
    constructor(str, status = null) {
        super();
        this._str = str;
        this._status = status;
    }
    set(status) {
        this.Status = status;
    }
    isObjectDistinctFrom(verifyState) {
        return this.Status != verifyState;
    }
    isEqualTo(letter) {
        return this._str == letter.Letter;
    }
    get Letter() { return this._str; }
    set Letter(letter) { this._str = letter; }
    get Status() { return this._status; }
    set Status(status) { this._status = status; }
}
