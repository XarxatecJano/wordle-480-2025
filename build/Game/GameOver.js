import { LoserLocation } from "../Elements/Location/LoserLocation.js";
import { MAX_ATTEMPTS } from "../env.js";
export class GameOver {
    constructor(turn) {
        this._turn = turn;
    }
    locationAssign() {
        new LoserLocation().assign();
    }
    isTrueCondition() {
        return this._turn.turn == MAX_ATTEMPTS;
    }
}
