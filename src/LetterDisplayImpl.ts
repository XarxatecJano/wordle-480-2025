import { ILetterDisplay } from "./ILetterDisplay.js";
import { IDOMAccess } from "./IDOMAccess.js";

export class LetterDisplayImpl implements ILetterDisplay {
    private domAccess: IDOMAccess;

    constructor(domAcces: IDOMAccess) {
        this.domAccess = domAcces;
    }

    private getCellElement(turn: number, position: number): HTMLElement | null {
        const row = this.domAccess.getELementById(`row_${turn}`);
        if (row) {
            const cells = Array.from(row.children);
            return cells[position] as HTMLElement || null;
        }
        return null;
    }

    setLetter(turn: number, position: number, letter: string): void {
        const cell = this.getCellElement(turn, position);
        if (cell) {
            cell.textContent = letter
        }
    }
    
    clearLetter(turn: number, position: number): void {
        const cell = this.getCellElement(turn, position);
        if (cell) {
            cell.textContent = ""
        }
    }

}