import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";

export class Turno {
    private _turn: number;
    private _position: number;

    constructor() {
        this._turn = 1;
        this._position = 0;
    }

    getTurn(): number {
        return this._turn;
    }

    getPosition(): number {
        return this._position;
    }

    advancePosition(): void {
        if (this._position < MAX_WORD_SIZE) {
            this._position++;
        }
    }

    decreasePosition(): void {
        if (this._position > 0) {
            this._position--;
        }
    }

    nextTurn(): void {
        this._turn++;
        this._position = 0;
    }

    canDelete(): boolean {
        return this._position > 0;
    }
}
