 export interface IGridUI {
    setNewLetter(turn: number, position: number, letter: string): void;
    deleteLetter(turn: number, position: number): void;
    changeCellColor(turn: number, position: number, state: string): void;
 }