var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { GameGrid } from "../../../interface/GameGrid.js";
import { GameKeyboard } from "../../../interface/GameKeyboard.js";
import { UserInterfaceController } from "../../../interface/UserInterfaceController.js";
import { KeyType } from "../../../interface/keyboard/KeyType.js";
import { MAX_WORD_SIZE } from "../../../env.js";
var checkMisplacedLetters = /** @class */ (function () {
    function checkMisplacedLetters() {
        this.interfaceController = new UserInterfaceController();
        this.grid = new GameGrid(this.interfaceController);
        this.keyboard = GameKeyboard.getGameKeyboard(this.interfaceController);
    }
    checkMisplacedLetters.prototype.createDictionary = function (pickedWord) {
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
    checkMisplacedLetters.prototype.subtractRightWordsFromDictionary = function (actualWord, pickedWord, charactersCount) {
        var dictionary = __assign({}, charactersCount);
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var actualLetter = actualWord.getLetterAtIndex(i);
            var pickedLetter = pickedWord.getLetterAtIndex(i);
            if (actualLetter.equals(pickedLetter)) {
                dictionary[pickedLetter.getChar()]--;
            }
        }
        return dictionary;
    };
    checkMisplacedLetters.prototype.check = function (gameState) {
        var actualLetter;
        var pickedLetter;
        var pattern;
        var numberOfCoincidencesPickedWord = 0;
        var numberOfCoincidencesActualWord = 0;
        var differenceOfCoincidences = 0;
        var isMisplacedLetter = true;
        var charactersCount = {};
        charactersCount = this.createDictionary(gameState.pickedWord);
        charactersCount = this.subtractRightWordsFromDictionary(gameState.actualWord, gameState.pickedWord, charactersCount);
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = gameState.actualWord.getLetterAtIndex(i);
            pickedLetter = gameState.pickedWord.getLetterAtIndex(i);
            pattern = new RegExp(actualLetter.getChar(), "g");
            numberOfCoincidencesPickedWord = gameState.pickedWord.numberOfCoincidences(pattern);
            numberOfCoincidencesActualWord = gameState.actualWord.numberOfCoincidences(pattern);
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (pickedLetter.equals(actualLetter)) {
                isMisplacedLetter = false;
            }
            else {
                if (charactersCount[actualLetter.getChar()] > 0) {
                    charactersCount[actualLetter.getChar()]--;
                    this.grid.setLetterState(gameState.turn, i, KeyType.MISPLACED);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyType.MISPLACED);
                }
                else {
                    isMisplacedLetter = false;
                    this.grid.setLetterState(gameState.turn, i, KeyType.USED);
                    this.keyboard.setKeyState(actualLetter.getCode(), KeyType.USED);
                }
            }
        }
    };
    return checkMisplacedLetters;
}());
export { checkMisplacedLetters };
