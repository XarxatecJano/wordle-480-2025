import { ICellStyler } from "./ICellStyler";
import { IDOMAccess } from "./IDOMAccess";

export class CellStylerImpl implements ICellStyler {
    private static readonly STATE_RIGHT_LETTER = "rightLetter";
    private static readonly STATE_MISPLACED_LETTER = "misplacedLetter";
    private static readonly CLASS_GREY = "cell-grey";
    private static readonly CLASS_GREEN = "cell-green";
    private static readonly CLASS_ORANGE = "cell-orange";

    private domAccess: IDOMAccess;

    constructor(domAccess: IDOMAccess) {
        this.domAccess = domAccess;
    }

    private getCellElement(turn: number, position: number): HTMLElement | null {
        const row = this.domAccess.getELementById(`row${turn}`);
        if (row) {
            const cells = Array.from(row.children);
            return cells[position] as HTMLElement || null;
        }
        return null;
    }

    applyCellStyle(turn: number, position: number, state: string): void {
        let styleClass = CellStylerImpl.CLASS_GREY

        if (state === CellStylerImpl.STATE_RIGHT_LETTER) {
            styleClass = CellStylerImpl.CLASS_GREEN;
        } else if (state === CellStylerImpl.STATE_MISPLACED_LETTER) {
            styleClass = CellStylerImpl.CLASS_ORANGE
        }

        const cell = this.getCellElement(turn, position);
        if (cell) {
            cell.classList.add(styleClass);
        }
    }

}