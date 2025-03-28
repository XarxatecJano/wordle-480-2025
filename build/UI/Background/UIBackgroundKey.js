export class UIKeyboardKey {
    constructor(styleManager) {
        this._styleManager = styleManager;
    }
    changeBackgroundKey(code) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code)
                this._styleManager.changeBackground("keyPressed" /* KEY_PRESSED */, key);
        }
    }
    getTotalNumberOfCoindidences(letter) {
        let number = 0;
        for (let i = 0; i < 6; i++) {
            number += this.getNumberOfCoincidences(i, letter);
        }
        return number;
    }
    deleteOneLetterForKeyboard(letter) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (this.getTotalNumberOfCoindidences(letter) == 1 && key.textContent == letter) {
                this._styleManager.removeBackground("keyPressed" /* KEY_PRESSED */, key);
            }
        }
    }
    getNumberOfCoincidences(turn, letter) {
        const row = this._styleManager.getElementTurn(turn);
        if (!row) {
            return 0;
        }
        return Array.from(row.children)
            .filter(key => key.textContent === letter).length;
    }
}
