

export interface ICheck {
    check(actualWord: string, pickedWord: string, turn: number, letterCount?: Record<string, number>, markedPositions?: Record<number, boolean>): void;
    checkType(): string; 
}
