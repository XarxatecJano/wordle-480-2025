import { Game } from "../Game/Game.js";

export interface ICheck {
    check: (game: Game) => void;
}