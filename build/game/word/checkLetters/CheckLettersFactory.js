import { checkMisplacedAndWrongLetters } from "./CheckMisplacedAndWrongLetters.js";
import { checkRightLetters } from "./CheckRightLetters.js";
import { KeyState } from "../../../interface/keyboard/KeyState.js";
var CheckLettersFactory = /** @class */ (function () {
    function CheckLettersFactory(gameState) {
        this.charCount = this.createDictionary(gameState.pickedWord);
        this.gameState = gameState;
    }
    CheckLettersFactory.prototype.check = function (type) {
        var checkLetters;
        console.log(this.charCount);
        switch (type) {
            case KeyState.RIGHT:
                checkLetters = new checkRightLetters();
                break;
            case KeyState.MISPLACED:
                checkLetters = new checkMisplacedAndWrongLetters();
                break;
            default:
                throw new Error("Tipo desconocido: " + type);
        }
        this.charCount = checkLetters.check(this.gameState, this.charCount);
    };
    CheckLettersFactory.prototype.createDictionary = function (pickedWord) {
        var charactersCount = {};
        for (var _i = 0, _a = pickedWord.getLetters(); _i < _a.length; _i++) {
            var letter = _a[_i];
            var char = letter.getChar();
            if (charactersCount[char]) {
                charactersCount[char]++;
            }
            else {
                charactersCount[char] = 1;
            }
        }
        return charactersCount;
    };
    return CheckLettersFactory;
}());
export { CheckLettersFactory };
