import { AdvancedMap } from "../AdvancedMap.js";
import { Util } from "../../Util.js";
import { BaseTools } from "../Abstracts/BaseTools.js";
import { Letter } from "../Letter/Letter.js";
export class Word extends BaseTools {
    constructor(word) {
        super();
        this._word = word;
        this._lettersWord = this.toArrayLetter();
        this._frecuencyWord = new AdvancedMap();
    }
    get Word() {
        return this._word;
    }
    set Word(word) {
        this._word = word;
    }
    get Letters() {
        return this._lettersWord;
    }
    get FrecuencyLetter() {
        return this._frecuencyWord;
    }
    addLetter(letter) {
        this._word += letter;
        this._lettersWord = this.toArrayLetter();
    }
    removeLastLetter() {
        this._word = this._word.slice(0, -1);
    }
    getLastLetter() {
        return this._word[this._word.length - 1];
    }
    setFrecuencyLetter() {
        this.FrecuencyLetter.setFrecuencyString(this.Letters.map((e) => {
            return e.Letter;
        }));
    }
    toArrayLetter() {
        let array = [];
        let arrayString = Util.toCharArray(this.Word);
        for (let i = 0; i < arrayString.length; i++) {
            array[i] = new Letter(arrayString[i], "" /* UNDEFINED */);
        }
        return array;
    }
    isEqualTo(object) {
        return this.Word == object.Word;
    }
    isObjectDistinctFrom(verifyObject) {
        return this.Word != verifyObject.Word;
    }
}
