import { IModifiable, IModifiableExtended } from "../Interfaces/IModifiable.js";
import { Position } from "./Position.js";

export class Turn implements IModifiable<number>, IModifiableExtended<number> {

    private _turn: number;
    private _position: Position;

    constructor(turn: number,position: number) {
        this._position = new Position(position);
        this._turn = turn;
    }

    get turn(): number {return this._turn}
    set turn(turn) {this._turn = turn}
    get Position(): Position {return this._position}
    set Position(position) {this._position = position}

    set(amount: number): void {
        this.turn = amount;
    }

    add(amount: number): void {
        this.turn += amount;
    }

    subtract(amount: number): void {
        this.turn -= amount;
    }
}