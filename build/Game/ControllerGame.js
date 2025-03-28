import { GameOver } from "./GameOver.js";
import { Winner } from "./Winner.js";
export class ControllerGame {
    constructor(actualWord, pickedWord, turn) {
        this._conditions = [
            new Winner(actualWord, pickedWord),
            new GameOver(turn)
        ];
    }
    checkGame() {
        for (const element of this._conditions) {
            if (element.isTrueCondition()) {
                element.locationAssign();
                break;
            }
        }
    }
}
