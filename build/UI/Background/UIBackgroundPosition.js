import { AdvancedMap } from "../../Elements/AdvancedMap.js";
export class UIBackgroundPosition {
    constructor(styleManager) {
        this._staticMap = new AdvancedMap([
            ["rightLetter" /* RIGHT */, "cell-green" /* GREEN */],
            ["misplacedLetter" /* MISPLACED */, "cell-orange" /* ORANGE */]
        ]);
        this._styleManager = styleManager;
    }
    changeBackgroundPosition(turn, position, state) {
        var _a;
        let positionClass = (_a = this._staticMap.get(state)) !== null && _a !== void 0 ? _a : "cell-grey" /* GREY */;
        const key = Array.from(this._styleManager.getElementTurn(turn).children)[position];
        this._styleManager.changeBackground(positionClass, key);
    }
}
