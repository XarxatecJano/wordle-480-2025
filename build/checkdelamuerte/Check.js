var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.method = function (wordManager) {
        var _this = this;
        var hash = new Map();
        var actualWord = wordManager.actualWord().allWordLetters();
        actualWord.forEach(function (letter) {
            hash.set(letter, _this.advancedMethod(letter, 0, hash) + 1);
        });
        console.log(hash);
    };
    Check.prototype.advancedMethod = function (letra, numeroDefecto, hash) {
        var value = hash.get(letra);
        return value !== null && value !== void 0 ? value : numeroDefecto;
    };
    return Check;
}());
export { Check };
