import { GameState } from "../../GameState.js";

export interface CheckLetters {
    check(state: GameState): void
}