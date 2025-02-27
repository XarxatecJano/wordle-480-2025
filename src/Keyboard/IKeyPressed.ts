import { Game } from "../Game/Game.js";

export interface IKeyPressed{
    _game: Game
    execute(): void;
}