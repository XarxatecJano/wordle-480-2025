import { CheckRightLetters } from "./CheckRightLetters.js";
import { CheckWrongLetters } from "./CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";
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
