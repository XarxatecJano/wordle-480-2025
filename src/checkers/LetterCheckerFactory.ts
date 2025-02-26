import { CheckRightLetters } from "./CheckRightLetters.js";
import { CheckWrongLetters } from "./CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./CheckMisplacedLetters.js";

export class LetterCheckerFactory {
    static createCheckers(game: any) {
        return [
            new CheckRightLetters(game),
            new CheckMisplacedLetters(game),
            new CheckWrongLetters(game)
        ];
    }
}