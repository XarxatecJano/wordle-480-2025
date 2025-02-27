import { KeyType } from "../interface/keyboard/KeyType.js";
import { CheckLetters } from "./CheckLetters.js";
import { checkMisplacedLetters } from "./CheckMisplacedLetters.js";
import { checkRightLetters } from "./CheckRightLetters.js";
import { GameState } from "../game/GameState.js";
import { checkWrongLetters } from "./CheckWrongLetters.js";

export class CheckLettersFactory {
    static check(state: GameState, type: KeyType){
        let checkLetters: CheckLetters;
        switch (type) {
            case KeyType.RIGHT:
                checkLetters = new checkRightLetters();
                break;
            case KeyType.MISPLACED:
                checkLetters = new checkMisplacedLetters();
                break;
            case KeyType.USED:
                checkLetters = new checkWrongLetters();
                break;
            default:
                throw new Error("Tipo desconocido: " + type);
        }
        checkLetters.check(state);
    }
}