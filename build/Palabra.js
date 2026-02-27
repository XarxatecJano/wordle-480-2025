import { Letra } from "./Letra.js";
var Palabra = /** @class */ (function () {
    function Palabra(palabra) {
        this._letras = palabra.split("").map(function (letra) { return new Letra(letra); });
    }
    Object.defineProperty(Palabra.prototype, "letras", {
        get: function () {
            return this._letras;
        },
        enumerable: false,
        configurable: true
    });
    Palabra.prototype.agregarLetra = function (letra) {
        if (this._letras.length < 5) {
            this._letras.push(letra);
        }
    };
    Palabra.prototype.borrarUltimaLetra = function () {
        this._letras.pop();
    };
    Palabra.prototype.esIgualA = function (otraPalabra) {
        return this.toString() === otraPalabra.toString();
    };
    Palabra.prototype.toString = function () {
        return this._letras.map(function (letra) { return letra.valor; }).join("");
    };
    return Palabra;
}());
export { Palabra };
