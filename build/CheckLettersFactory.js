import { KeyType } from "./enum/KeyType.js";
import { checkMisplacedLetters } from "./checkStrategies/CheckMisplacedLetters.js";
import { checkRightLetters } from "./checkStrategies/CheckRightLetters.js";
import { checkWrongLetters } from "./checkStrategies/CheckWrongLetters.js";
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
            case KeyType.WRONG:
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
