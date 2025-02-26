import { KeyType } from "./enum/KeyType.js";
import { CheckLetters } from "./checkStrategies/CheckLetters.js";
import { checkMisplacedLetters } from "./checkStrategies/CheckMisplacedLetters.js";
import { checkRightLetters } from "./checkStrategies/CheckRightLetters.js";
import { GameState } from "./model/GameState.js";
import { checkWrongLetters } from "./checkStrategies/CheckWrongLetters.js";

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