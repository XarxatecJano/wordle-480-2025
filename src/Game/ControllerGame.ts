import { IControllerGame } from "../Elements/Interfaces/IControllerGame.js";
import { Turn } from "../Elements/Turn/Turn.js";
import { Word } from "../Elements/Word/Word.js";
import { GameOver } from "./GameOver.js";
import { Winner } from "./Winner.js";

export class ControllerGame {

    private readonly _conditions: IControllerGame[];

    constructor(
        actualWord: Word,
        pickedWord: Word,
        turn: Turn
    ) {

        this._conditions = [
            new Winner(actualWord,pickedWord),
            new GameOver(turn)
        ];
    }

    checkGame(): void {
        for (const element of this._conditions) {
            if (element.isTrueCondition()) {
                element.locationAssign();
                break;
            }
        }
    }
}