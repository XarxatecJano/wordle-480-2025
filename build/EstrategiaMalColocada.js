import { MAX_WORD_SIZE } from "./env.js";
var EstrategiaMalColocada = /** @class */ (function () {
    function EstrategiaMalColocada(interfaz, pickedWord) {
        this._interfaz = interfaz;
        this._pickedWord = pickedWord;
    }
    EstrategiaMalColocada.prototype.verificar = function (actualWord, turn, ocurrenciasPalabra, conteoLetras) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var letter = actualWord.letras[i];
            var pattern = new RegExp(letter.valor, "g");
            var numMatches = (this._pickedWord.toString().match(pattern) || []).length;
            if (numMatches > 0 && this._pickedWord.letras[i].valor !== letter.valor) {
                var letra = actualWord.letras[i].valor;
                if (ocurrenciasPalabra[letra] > 0 && !conteoLetras[i]) {
                    ocurrenciasPalabra[letra]--;
                    conteoLetras[i] = true;
                    actualWord.letras[i].setEstadoMalColocada();
                    this._interfaz.changeBackgroundPosition(turn, i, "mal_colocada");
                }
            }
        }
    };
    return EstrategiaMalColocada;
}());
export { EstrategiaMalColocada };
