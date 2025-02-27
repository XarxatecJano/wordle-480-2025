import { GameState } from "../game/GameState.js";

export interface CheckLetters {
    check(state: GameState): void
}