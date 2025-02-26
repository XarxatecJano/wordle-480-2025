import { Game } from "../Game";

export interface ICheck {
    check: (game: Game ) => void;
}