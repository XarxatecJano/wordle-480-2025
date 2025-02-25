import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { UserInterfaceController } from "./UserInterfaceController.js";
import { Word } from "./Word.js";
import { GameKeyboard } from "./GameKeyboard.js";
import { KeyState } from "./KeyState.js";
import { GameGrid } from "./GameGrid.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        var _this = this;
        this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                var state = _this.pickedWord.checkLetter(_this.actualWord.getLetterAtIndex(i), i);
                if (state == KeyState.RIGHT) {
                    _this.setGridLetterState(i, "rightLetter");
                    _this.keyboard.setKeyboardKeyState(_this.pickedWord.getLetterAtIndex(i).getCode(), KeyState.RIGHT);
                }
            }
        };
        this.checkMisplacedLetters = function () {
            var actualLetter;
            var pattern;
            var numberOfCoincidencesPickedWord = 0;
            var numberOfCoincidencesActualWord = 0;
            var differenceOfCoincidences = 0;
            var isMisplacedLetter = true;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = _this.actualWord.getLetterAtIndex(i);
                pattern = new RegExp(actualLetter.getChar(), "g");
                numberOfCoincidencesPickedWord = _this.pickedWord.numberOfCoincidences(pattern);
                numberOfCoincidencesActualWord = _this.actualWord.numberOfCoincidences(pattern);
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (var j = 0; j < MAX_WORD_SIZE; j++) {
                        if (_this.pickedWord.getLetterAtIndex(j) == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && _this.pickedWord.getLetterAtIndex(i) == _this.actualWord.getLetterAtIndex(i)) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                    _this.setGridLetterState(i, "misplacedLetter");
                    /*this.keyboard.setKeyboardKeyState(this.pickedWord.getLetterAtIndex(i).getCode(), KeyState.MISPLACED);*/
                }
            }
        };
        this.checkWrongLetters = function () {
            var actualLetter;
            var pattern;
            var numberOfCoincidencesPickedWord = 0;
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = _this.actualWord.getLetterAtIndex(i);
                pattern = new RegExp(actualLetter.getChar(), "g");
                numberOfCoincidencesPickedWord = _this.pickedWord.numberOfCoincidences(pattern);
                if (numberOfCoincidencesPickedWord == 0) {
                    _this.setGridLetterState(i, "wrongLetter");
                }
            }
        };
        this.updateAfterANewWord = function () {
            _this.highlightLetters();
            _this.checkWrongLetters();
            _this.checkMisplacedLetters();
            _this.checkRightLetters();
            _this.turn = _this.turn + 1;
            _this.actualWord = new Word([]);
        };
        this.pickedWord = pickedWord;
        this.actualWord = new Word([]);
        this.turn = 1;
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }
    Game.prototype.setGridLetterState = function (position, state) {
        this.grid.setGridLetterState(this.turn, position, state);
    };
    Game.prototype.checkWordIsRight = function () {
        if (this.actualWord.equals(this.pickedWord)) {
            location.assign("/winner");
        }
    };
    Game.prototype.highlightLetters = function () {
        for (var _i = 0, _a = this.actualWord.getLetters(); _i < _a.length; _i++) {
            var letter = _a[_i];
            this.keyboard.setKeyboardKeyState(letter.getCode(), KeyState.USED);
        }
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Game.prototype.isValidLetter = function (letter) {
        if (letter.isValidLetter()) {
            if (this.actualWord.getSize() < MAX_WORD_SIZE) {
                return true;
            }
        }
        return false;
    };
    Game.prototype.setNewLetter = function (letter) {
        this.grid.setNewLetter(this.turn, this.actualWord.getSize(), letter.getChar());
        this.actualWord.addLetter(letter);
    };
    Game.prototype.wordIsComplete = function () {
        if (this.actualWord.getSize() == MAX_WORD_SIZE)
            return true;
        return false;
    };
    Game.prototype.getWordSize = function () {
        return this.actualWord.getSize();
    };
    Game.prototype.removeLastLetter = function () {
        this.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.turn, this.actualWord.getSize());
    };
    return Game;
}());
export { Game };
