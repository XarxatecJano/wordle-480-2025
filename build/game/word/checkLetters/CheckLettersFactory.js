import { KeyType } from "../../../interface/keyboard/KeyType.js";
import { checkMisplacedLetters } from "./CheckMisplacedLetters.js";
import { checkRightLetters } from "./CheckRightLetters.js";
import { checkWrongLetters } from "./CheckWrongLetters.js";
var CheckLettersFactory = /** @class */ (function () {
    function CheckLettersFactory() {
    }
    CheckLettersFactory.check = function (state, type) {
        var checkLetters;
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
    };
    return CheckLettersFactory;
}());
export { CheckLettersFactory };
