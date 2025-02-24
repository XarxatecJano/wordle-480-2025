import { CheckRightLetters } from "./LetterCheckersStrategy/CheckRightLetters.js";
import { CheckWrongLetters } from "./LetterCheckersStrategy/CheckWrongLetters.js";
import { CheckMisplacedLetters } from "./LetterCheckersStrategy/CheckMisplacedLetters.js";

export class LetterCheckerFactory {
    static createCheckers(game: any) {
        return [
            new CheckRightLetters(game),
            new CheckWrongLetters(game),
            new CheckMisplacedLetters(game)
        ];
    }
}