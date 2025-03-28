export class StyleManager {
    changeBackground(colorClass, key) {
        key.classList.add(colorClass);
    }
    removeBackground(colorClass, key) {
        key.classList.remove(colorClass);
    }
    getElementTurn(turn) {
        return document.getElementById(`row_${turn}`);
    }
}
