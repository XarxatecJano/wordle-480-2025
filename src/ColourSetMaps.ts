import { MAX_WORD_SIZE } from "./env.js";

export class ColourSetMaps {
    private _colorMap: Map<string, number>;
    private _choosenPosition: Map<number, boolean>;

    constructor() {
        this._colorMap = new Map<string, number>;
        this._choosenPosition = new Map<number, boolean>;
    }
    setColourMap(pickedWord:string): void {
        this.setChoosenPositionMap();
        this.setColorMap(pickedWord);
    } 
    setChoosenPositionMap(): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            this._choosenPosition.set(i, false);
        }
    }
    setColorMap(pickedWord: string): void {
        let actualLetter: string = "";
        let pattern: RegExp;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = pickedWord[i];
            pattern = new RegExp(actualLetter, "g");
            this._colorMap.set(actualLetter, (pickedWord.match(pattern) || []).length);
        }
    }
    get ChoosenPositionMap(): Map<number, boolean> {
        return this._choosenPosition;
    }
    get ColorMap(): Map<string, number> {
        return this._colorMap;
    }




}