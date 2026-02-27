import { MAX_WORD_SIZE } from "./env.js";
var Turno = /** @class */ (function () {
    function Turno() {
        this._turn = 1;
        this._position = 0;
    }
    Turno.prototype.getTurn = function () {
        return this._turn;
    };
    Turno.prototype.getPosition = function () {
        return this._position;
    };
    Turno.prototype.advancePosition = function () {
        if (this._position < MAX_WORD_SIZE) {
            this._position++;
        }
    };
    Turno.prototype.decreasePosition = function () {
        if (this._position > 0) {
            this._position--;
        }
    };
    Turno.prototype.nextTurn = function () {
        this._turn++;
        this._position = 0;
    };
    Turno.prototype.canDelete = function () {
        return this._position > 0;
    };
    return Turno;
}());
export { Turno };
