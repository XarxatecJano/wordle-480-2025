import { IGameState } from "./IGameState";

export class GameState implements IGameState {
    private turn: number;
    private position: number;
    private currentWord: string;

    constructor(
        turn: number,
        position: number,
        currentWord: string
    ) {
        this.turn = turn,
        this.position = position,
        this.currentWord = currentWord
    }

    getTurn(): number {
        return this.turn;
    }
    incrementTurn(): void {
        this.turn++;
    }
    getPosition(): number {
        return this.position;
    }
    setPosition(position: number): void {
        this.position = position;
    }
    getCurrentWord(): string {
        return this.currentWord
    }
    setCurrentWord(word: string): void {
        this.currentWord = word
    }
    isGameOver(maxAttempts: number): boolean {
        return this.turn >= maxAttempts
    }
}