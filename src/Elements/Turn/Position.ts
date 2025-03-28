import { IModifiable, IModifiableExtended } from "../Interfaces/IModifiable.js";

export class Position implements IModifiable<number>, IModifiableExtended<number> {
    private _position: number;

    constructor(position: number) {
        this._position = position;
    }
    
    get position(): number {return this._position}
    set position(position: number) {this._position = position}

    set(amount: number): void {
        this.position = amount;
    }

    add(amount: number): void {
        this.position += amount;
    }

    subtract(amount: number): void {
        this.position -= amount;
    }
}