import { MAX_ATTEMPTS } from "./env.js";
var VerificadorPalabra = /** @class */ (function () {
    function VerificadorPalabra(pickedWord, interfaz) {
        this._pickedWord = pickedWord;
        this._interface = interfaz;
        this.estrategias = [];
    }
    VerificadorPalabra.prototype.setEstrategias = function (estrategias) {
        this.estrategias = estrategias;
    };
    VerificadorPalabra.prototype.checkWord = function (actualWord, turn, ocurrenciasPalabra, conteoLetras) {
        if (actualWord.toString() === this._pickedWord.toString()) {
            location.assign("/winner");
        }
        for (var _i = 0, _a = this.estrategias; _i < _a.length; _i++) {
            var estrategia = _a[_i];
            estrategia.verificar(actualWord, turn, ocurrenciasPalabra, conteoLetras);
        }
        if (turn >= MAX_ATTEMPTS) {
            if (actualWord.toString() === this._pickedWord.toString()) {
                location.assign("/winner");
            }
            else {
                location.assign("/loser");
            }
        }
    };
    return VerificadorPalabra;
}());
export { VerificadorPalabra };
