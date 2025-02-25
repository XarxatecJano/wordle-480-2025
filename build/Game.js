import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { UserInterfaceController } from "./controller/UserInterfaceController.js";
import { Word } from "./model/Word.js";
import { GameKeyboard } from "./controller/GameKeyboard.js";
import { KeyType } from "./enum/KeyType.js";
import { GameGrid } from "./controller/GameGrid.js";
import { GameState } from "./model/GameState.js";
var Game = /** @class */ (function () {
    function Game(pickedWord) {
        var _this = this;
        this.checkRightLetters = function () {
            for (var i = 0; i < MAX_WORD_SIZE; i++) {
                var state = _this.gameManager.pickedWord.checkLetter(_this.gameManager.actualWord.getLetterAtIndex(i), i);
                if (state == KeyType.RIGHT) {
                    _this.setGridLetterState(i, "rightLetter");
                    _this.keyboard.setKeyboardKeyState(_this.gameManager.pickedWord.getLetterAtIndex(i).getCode(), KeyType.RIGHT);
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
                actualLetter = _this.gameManager.actualWord.getLetterAtIndex(i);
                pattern = new RegExp(actualLetter.getChar(), "g");
                numberOfCoincidencesPickedWord = _this.gameManager.pickedWord.numberOfCoincidences(pattern);
                numberOfCoincidencesActualWord = _this.gameManager.actualWord.numberOfCoincidences(pattern);
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (var j = 0; j < MAX_WORD_SIZE; j++) {
                        if (_this.gameManager.pickedWord.getLetterAtIndex(j) == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && _this.gameManager.pickedWord.getLetterAtIndex(i) == _this.gameManager.actualWord.getLetterAtIndex(i)) {
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
                actualLetter = _this.gameManager.actualWord.getLetterAtIndex(i);
                pattern = new RegExp(actualLetter.getChar(), "g");
                numberOfCoincidencesPickedWord = _this.gameManager.pickedWord.numberOfCoincidences(pattern);
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
            _this.checkWordIsRight();
            _this.gameManager.nextTurn();
            _this.gameManager.actualWord = new Word([]);
        };
        this.gameManager = new GameState(pickedWord);
        this.interface = new UserInterfaceController();
        this.keyboard = new GameKeyboard(this.interface);
        this.grid = new GameGrid(this.interface);
    }
    Game.prototype.setGridLetterState = function (position, state) {
        this.grid.setGridLetterState(this.gameManager.turn, position, state);
    };
    Game.prototype.checkWordIsRight = function () {
        if (this.gameManager.actualWord.equals(this.gameManager.pickedWord)) {
            location.assign("/winner");
        }
    };
    Game.prototype.highlightLetters = function () {
        for (var _i = 0, _a = this.gameManager.actualWord.getLetters(); _i < _a.length; _i++) {
            var letter = _a[_i];
            this.keyboard.setKeyboardKeyState(letter.getCode(), KeyType.USED);
        }
    };
    Game.prototype.checkGameIsOver = function () {
        if (this.gameManager.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    };
    Game.prototype.isValidLetter = function (letter) {
        if (letter.isValidLetter()) {
            if (this.gameManager.actualWord.getSize() < MAX_WORD_SIZE) {
                return true;
            }
        }
        return false;
    };
    Game.prototype.setNewLetter = function (letter) {
        this.grid.setNewLetter(this.gameManager.turn, this.gameManager.actualWord.getSize(), letter.getChar());
        this.gameManager.actualWord.addLetter(letter);
    };
    Game.prototype.wordIsComplete = function () {
        if (this.gameManager.actualWord.getSize() == MAX_WORD_SIZE)
            return true;
        return false;
    };
    Game.prototype.getWordSize = function () {
        return this.gameManager.actualWord.getSize();
    };
    Game.prototype.removeLastLetter = function () {
        this.gameManager.actualWord.removeLastLetter();
        this.grid.deleteLetter(this.gameManager.turn, this.gameManager.actualWord.getSize());
    };
    return Game;
}());
export { Game };
