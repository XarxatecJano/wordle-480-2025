import { CheckRightLetters } from "./LetterCheckersStrategy/CheckRightLetters.js";
import { CheckWrongLetters } from "./LetterCheckersStrategy/CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./LetterCheckersStrategy/CheckMisplacedLetters.js";
var LetterCheckerFactory = /** @class */ (function () {
    function LetterCheckerFactory() {
    }
    LetterCheckerFactory.createCheckers = function (game) {
        return [
            new CheckRightLetters(game),
            new CheckWrongLetters(game),
            new CheckMisplacedLetters(game)
        ];
    };
    return LetterCheckerFactory;
}());
export { LetterCheckerFactory };
