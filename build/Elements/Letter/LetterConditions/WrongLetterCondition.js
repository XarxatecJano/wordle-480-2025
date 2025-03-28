export class WrongLetterCondition {
    constructor(frecuencyMap) {
        this._frecuencyMap = frecuencyMap;
    }
    checkCondition(userLetter, targetLetter, result) {
        if (result.isObjectDistinctFrom("rightLetter" /* RIGHT */)) {
            if (this._frecuencyMap.getOrDefault(userLetter.Letter, 0) > 0) {
                let frecuency = this._frecuencyMap.getOrDefault(userLetter.Letter, 0);
                result.set("misplacedLetter" /* MISPLACED */);
                this._frecuencyMap.set(userLetter.Letter, frecuency - 1);
                return true;
            }
            else {
                result.set("wrongLetter" /* WRONG */);
            }
        }
        return false;
    }
}
