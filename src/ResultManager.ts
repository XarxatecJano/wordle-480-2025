export class ResultManager {
    checkVictory(actualWord: string, pickedWord: string): boolean {
        return actualWord === pickedWord;
    }

    handleVictory(): void {
        location.assign("/winner");
    }

    handleGameOver(): void {
        location.assign("/loser");
    }
}