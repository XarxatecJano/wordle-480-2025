import { KEY_PRESSED_CLASS } from "../../env.js";
import { IStyleManager } from "../Style/IStyleManager.js";

export class UIKeyboardKey {

    private readonly _styleManager: IStyleManager
    constructor(styleManager: IStyleManager) {
        this._styleManager = styleManager;
    }

    changeBackgroundKey(code: string){
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code) this._styleManager.changeBackground(KEY_PRESSED_CLASS.KEY_PRESSED,key);
        }
    }

    getTotalNumberOfCoindidences(letter: string): number {
        let number = 0;
        for (let i = 0; i < 6; i++) {
            number += this.getNumberOfCoincidences(i, letter);
        }
        return number;
    }

    deleteOneLetterForKeyboard(letter:string) {
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys) {
            if (this.getTotalNumberOfCoindidences(letter) == 1 && key.textContent == letter) {
                this._styleManager.removeBackground(KEY_PRESSED_CLASS.KEY_PRESSED,key);
            }
        }
    }

    getNumberOfCoincidences(turn: number, letter: string): number {
        const row = this._styleManager.getElementTurn(turn) as HTMLElement
        if (!row) {
            return 0;
        }
        return Array.from(row.children)
            .filter(key => key.textContent === letter).length;
    }
}