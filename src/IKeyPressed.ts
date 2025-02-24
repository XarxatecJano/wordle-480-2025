import { Game } from "./Game";

export interface IKeyPressed{
    _game: Game
    execute(): void;
}