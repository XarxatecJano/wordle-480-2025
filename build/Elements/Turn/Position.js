export class Position {
    constructor(position) {
        this._position = position;
    }
    get position() { return this._position; }
    set position(position) { this._position = position; }
    set(amount) {
        this.position = amount;
    }
    add(amount) {
        this.position += amount;
    }
    subtract(amount) {
        this.position -= amount;
    }
}
