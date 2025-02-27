import { GameLogic } from "../Game/GameLogic.js";

export interface ICheckFinal{
    _game: GameLogic;
    check(): boolean;
}