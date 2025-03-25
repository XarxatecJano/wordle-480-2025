import { IDOMAccess } from "./IDOMAccess";
import { ILetterDisplay } from "./ILetterDisplay";
import { ICellStyler } from "./ICellStyler";
import { IKeyboardStyler } from "./IKeyboardStyler";
import { DOMAccessImpl } from "./DOMAccesImpl";
import { LetterDisplayImpl } from "./LetterDisplayImpl";
import { CellStylerImpl } from "./CellStylerImpl";
import { KeyboardStylerImpl } from "./KeyboardStylerImpl";

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