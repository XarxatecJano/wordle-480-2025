export class RightLetterCondition {
    constructor(frecuencyMap) {
        this._frecuencyMap = frecuencyMap;
    }
    checkCondition(userLetter, targetLetter, result) {
        if (userLetter.isEqualTo(targetLetter)) {
            result.set("rightLetter" /* RIGHT */);
            this._frecuencyMap.set(userLetter.Letter, this._frecuencyMap.getOrDefault(userLetter.Letter, 0) - 1);
            return true;
        }
        return false;
    }
}
