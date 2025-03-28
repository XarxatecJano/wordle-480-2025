export class UIBoard {
    constructor(backgroundManager, styleManager) {
        this._backgroundManager = backgroundManager;
        this._styleManager = styleManager;
    }
    setLetter(turn, position, letter) {
        Array.from(this._styleManager.getElementTurn(turn).children)[position].textContent = letter;
    }
    changeBackgroundPosition(turn, position, state) {
        this._backgroundManager.changeBackgroundPosition(turn, position, state);
    }
}
