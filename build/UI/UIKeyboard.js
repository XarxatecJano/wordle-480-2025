export class UIKeyboard {
    constructor(backgroundManager) {
        this._backgroundManager = backgroundManager;
    }
    changeBackgroundKey(code) {
        this._backgroundManager.changeBackgroundKey(code);
    }
    deleteOneLetterForKeyboard(letter) {
        this._backgroundManager.deleteOneLetterForKeyboard(letter);
    }
}
