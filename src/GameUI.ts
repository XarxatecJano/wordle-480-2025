import { IGameUI } from "./IGameUI.js";
import { GridUI } from "./GridUI.js";
import { KeyboardUI } from "./KeyboardUI.js";

export class GameUI implements IGameUI {
    private gridUI: GridUI;
    private keyboard: KeyboardUI;

    constructor() {
        this.gridUI = new GridUI();
        this.keyboard = new KeyboardUI();
    }

    setNewLetter(turn: number, position: number, letter: string): void {
        this.gridUI.setNewLetter(turn, position, letter);
    } 

    deleteLetter(turn: number, position: number): void {
        this.gridUI.deleteLetter(turn, position);
    }

    changeCellColor(turn: number, position: number, state: string): void {
        this.gridUI.changeCellColor(turn, position, state);
    }

    changeKeyColor(code: string): void {
        this.keyboard.changeKeyColor(code);
    }
}