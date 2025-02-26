import { CheckRightLetters } from "./LetterCheckersStrategy/CheckRightLetters.js";
import { CheckWrongLetters } from "./LetterCheckersStrategy/CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./LetterCheckersStrategy/CheckMisplacedLetters.js";
var LetterCheckerFactory = /** @class */ (function () {
    function LetterCheckerFactory() {
    }
    LetterCheckerFactory.createCheckers = function (game) {
        return [
            new CheckRightLetters(game),
            new CheckMisplacedLetters(game),
            new CheckWrongLetters(game)
        ];
    };
    return LetterCheckerFactory;
}());
export { LetterCheckerFactory };
