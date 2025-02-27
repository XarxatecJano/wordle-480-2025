import { CheckCorrectLetters } from "./CheckCorrectLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";
import { CheckWrongLetters } from "./CheckWrongLetters.js";
var CreateChecks = /** @class */ (function () {
    function CreateChecks() {
    }
    CreateChecks.getInstance = function () {
        if (!CreateChecks.instance) {
            CreateChecks.instance = new CreateChecks();
        }
        return CreateChecks.instance;
    };
    CreateChecks.prototype.check = function (game) {
        var strategies = [new CheckCorrectLetters(game),
            new CheckMisplacedLetters(game),
            new CheckWrongLetters(game)
        ];
        return strategies;
    };
    return CreateChecks;
}());
export { CreateChecks };
