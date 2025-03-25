import { MAX_WORD_SIZE } from "./env.js";
var WordEvaluator = /** @class */ (function () {
    function WordEvaluator() {
    }
    WordEvaluator.prototype.checkRightLetters = function (userWord, targetWord) {
        var positions = [];
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (targetWord[i] === userWord[i]) {
                positions.push(i);
            }
        }
        return positions;
    };
    WordEvaluator.prototype.checkMisplacedLetters = function (userWord, targetWord) {
        var positions = [];
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var letter = userWord[i];
            var pattern = new RegExp(letter, "g");
            var occurrences = (targetWord.match(pattern) || []).length;
            if (occurrences > 0 && targetWord[i] !== userWord[i]) {
                positions.push(i);
            }
        }
        return positions;
    };
    WordEvaluator.prototype.checkWrongLetters = function (userWord, targetWord) {
        var position = [];
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var letter = userWord[i];
            var pattern = new RegExp(letter, "g");
            var occurrences = (targetWord.match(pattern) || []).length;
            if (occurrences === 0) {
                position.push(i);
            }
        }
        return position;
    };
    return WordEvaluator;
}());
export { WordEvaluator };
