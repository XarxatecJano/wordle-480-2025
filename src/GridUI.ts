import { IGridUI } from "./IGridUI";

export class GridUI implements IGridUI {
    setNewLetter(turn: number, position: number, letter: string): void {
        const row = document.getElementById(`row_${turn}`);
        if (row) {
            const cell = row.children[position];
            if (cell) {
                cell.textContent = letter;
            }
        }
    }

    deleteLetter(turn: number, position: number): void {
        const row = document.getElementById(`row_${turn}`);
        if (row) {
            const cell = row.children[position];
            if (cell) {
                cell.textContent = "";
            }
        }
    }

    changeCellColor(turn: number, position: number, state: string): void {
        let cssClass = "cell-grey";
        if (state === "rightLetter") cssClass = "cell-green";
        if (state === "misplacedLetter") cssClass = "cell-orange";

        const row = document.getElementById(`row_${turn}`);
        if (row) {
            const cell = row.children[position];
            if (cell) {
                cell.classList.add(cssClass);
            }
        }
    }
}