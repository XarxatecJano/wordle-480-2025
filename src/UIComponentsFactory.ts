import { IDOMAccess } from "./IDOMAccess.js";
import { ILetterDisplay } from "./ILetterDisplay.js";
import { ICellStyler } from "./ICellStyler.js";
import { IKeyboardStyler } from "./IKeyboardStyler.js";
import { DOMAccessImpl } from "./DOMAccesImpl.js";
import { LetterDisplayImpl } from "./LetterDisplayImpl.js";
import { CellStylerImpl } from "./CellStylerImpl.js";
import { KeyboardStylerImpl } from "./KeyboardStylerImpl.js";

export class UIComponentsFactory {
    static createDOMAccess(): IDOMAccess {
        return new DOMAccessImpl()
    }

    static createLetterDisplay(domAccess: IDOMAccess): ILetterDisplay {
        return new LetterDisplayImpl(domAccess);
    }

    static createCellStyler(domAccess: IDOMAccess): ICellStyler {
        return new CellStylerImpl(domAccess);
    }

    static createKeyboardStyler(domAccess: IDOMAccess): IKeyboardStyler {
        return new KeyboardStylerImpl(domAccess);
    }
}