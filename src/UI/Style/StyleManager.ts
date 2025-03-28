import { IStyleManager } from "./IStyleManager.js";

export class StyleManager implements IStyleManager {

    changeBackground(colorClass: string, key: Element): void {
        key.classList.add(colorClass);
    }

    removeBackground(colorClass: string, key: Element): void {
        key.classList.remove(colorClass);
    }

    getElementTurn(turn: number) {
        return document.getElementById(`row_${turn}`)
    }
}