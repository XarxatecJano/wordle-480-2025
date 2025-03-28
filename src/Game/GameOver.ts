import { IControllerGame } from "../Elements/Interfaces/IControllerGame.js";
import { LoserLocation } from "../Elements/Location/LoserLocation.js";
import { Turn } from "../Elements/Turn/Turn.js";
import { MAX_ATTEMPTS } from "../env.js";

export class GameOver implements IControllerGame {

    private readonly _turn: Turn
    constructor(turn: Turn) {
        this._turn = turn
    }

    locationAssign(): void {
        new LoserLocation().assign();
    }
    
    isTrueCondition(): boolean {
        return this._turn.turn == MAX_ATTEMPTS
    }
}