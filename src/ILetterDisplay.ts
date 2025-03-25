export interface ILetterDisplay {
    setLetter(turn: number, position: number, letter: string): void
    clearLetter(turn: number, position: number): void
}