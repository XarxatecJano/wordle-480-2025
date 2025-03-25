var Word = /** @class */ (function () {
    function Word(wordsArray) {
        this.words = wordsArray;
    }
    Word.prototype.getWords = function () {
        return this.words;
    };
    Word.prototype.getRandomWord = function () {
        return this.words[Math.floor(Math.random() * this.words.length)];
    };
    return Word;
}());
export { Word };
