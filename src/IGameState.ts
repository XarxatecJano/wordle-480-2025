export interface IGameState {
    getTurn(): number;
    incrementTurn(): void;
    getPosition(): number;
    setPosition(position: number): void;
    getCurrentWord(): string;
    setCurrentWord(word: string): void;
    isGameOver(maxAttempts: number): boolean;
}