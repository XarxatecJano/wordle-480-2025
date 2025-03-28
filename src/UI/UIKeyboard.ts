import { UIKeyboardKey } from "./Background/UIBackgroundKey.js";

export class UIKeyboard {

    private readonly _backgroundManager: UIKeyboardKey
    constructor(backgroundManager: UIKeyboardKey) {
        this._backgroundManager = backgroundManager;
    }

    changeBackgroundKey(code: string){
        this._backgroundManager.changeBackgroundKey(code);
    }

    deleteOneLetterForKeyboard(letter:string) {
        this._backgroundManager.deleteOneLetterForKeyboard(letter);
    }
}