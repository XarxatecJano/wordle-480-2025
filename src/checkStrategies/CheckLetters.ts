import { GameState } from "../model/GameState.js";

export interface CheckLetters {
    check(state: GameState): void
}