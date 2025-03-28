import { AdvancedMap } from "../AdvancedMap.js";
import { Util } from "../../Util.js";
import { BaseTools } from "../Abstracts/BaseTools.js";
import { Letter } from "../Letter/Letter.js";
import { RESULT_CLASS_LETTERS } from "../../env.js";

export class Word extends BaseTools<Word, Word> {
    

    private _word: string;
    private _lettersWord: Letter[];
    private readonly _frecuencyWord: AdvancedMap<string, number>

    constructor(word: string){
        super();
        this._word = word;
        this._lettersWord = this.toArrayLetter()  
        this._frecuencyWord = new AdvancedMap();
    }

    get Word(): string{
        return this._word;
    }
    set Word(word: string){
        this._word = word;
    }

    get Letters(): Letter[] {
        return this._lettersWord;
    }

    get FrecuencyLetter() {
        return this._frecuencyWord;
    }

    addLetter(letter: string) {
        this._word += letter;
        this._lettersWord = this.toArrayLetter();  
    }

    removeLastLetter() {
        this._word = this._word.slice(0, -1);
    }

    getLastLetter(): string {
        return this._word[this._word.length - 1]
    }

    setFrecuencyLetter() {
        this.FrecuencyLetter.setFrecuencyString(this.Letters.map((e) => {
            return e.Letter;
        }));
    }

    toArrayLetter(): Letter[] {
        let array: Letter[] = []
        let arrayString = Util.toCharArray(this.Word);
        for (let i = 0; i < arrayString.length; i++) {
            array[i] = new Letter(arrayString[i], RESULT_CLASS_LETTERS.UNDEFINED);
        }
        return array;
    }

    override isEqualTo(object: Word): boolean {
        return this.Word == object.Word
    }

    override isObjectDistinctFrom(verifyObject: Word): boolean {
        return this.Word != verifyObject.Word;
    }

}