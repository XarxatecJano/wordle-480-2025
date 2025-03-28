import { Position } from "./Position.js";
export class Turn {
    constructor(turn, position) {
        this._position = new Position(position);
        this._turn = turn;
    }
    get turn() { return this._turn; }
    set turn(turn) { this._turn = turn; }
    get Position() { return this._position; }
    set Position(position) { this._position = position; }
    set(amount) {
        this.turn = amount;
    }
    add(amount) {
        this.turn += amount;
    }
    subtract(amount) {
        this.turn -= amount;
    }
}
