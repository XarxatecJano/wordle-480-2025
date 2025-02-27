import { MAX_WORD_SIZE } from "../../env.js";
import { KeyType } from "../../interface/keyboard/KeyType.js";
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
    }
    Word.prototype.addLetter = function (letter) {
        if (this.getSize() < MAX_WORD_SIZE) {
            this.word.push(letter);
        }
    };
    Word.prototype.removeLastLetter = function () {
        var letter = null;
        if (this.getSize() != 0) {
            letter = this.word.pop();
        }
        return letter;
    };
    Word.prototype.getLetterAtIndex = function (index) {
        return this.word[index];
    };
    Word.prototype.getWordString = function () {
        var wordString = "";
        for (var _i = 0, _a = this.word; _i < _a.length; _i++) {
            var letter = _a[_i];
            wordString += (letter.getChar());
        }
        return wordString;
    };
    Word.prototype.getLetters = function () {
        return this.word;
    };
    Word.prototype.numberOfCoincidences = function (pattern) {
        return (this.getWordString().match(pattern) || []).length;
    };
    Word.prototype.getSize = function () {
        return this.word.length;
    };
    Word.prototype.equals = function (otherWord) {
        if (this.getSize() != otherWord.getSize()) {
            return false;
        }
        var myLetters = this.getLetters();
        var otherLetters = otherWord.getLetters();
        for (var i = 0; i < this.getSize(); i++) {
            if (!myLetters[i].equals(otherLetters[i])) {
                return false;
            }
        }
        return true;
    };
    Word.prototype.checkLetter = function (letter, position) {
        if (position < 0 || position >= this.getSize()) {
            return KeyType.UNUSED;
        }
        if (this.getLetterAtIndex(position).equals(letter)) {
            return KeyType.RIGHT;
        }
        for (var _i = 0, _a = this.word; _i < _a.length; _i++) {
            var wordLetter = _a[_i];
            if (wordLetter.equals(letter)) {
                return KeyType.MISPLACED;
            }
        }
        return KeyType.USED;
    };
    return Word;
}());
export { Word };
