export interface ICellStyler {
    applyCellStyle(turn: number, position: number, state: string): void
}