import { MAX_WORD_SIZE } from "./env.js";
var EstrategiaCorrecta = /** @class */ (function () {
    function EstrategiaCorrecta(interfaz, pickedWord) {
        this._interfaz = interfaz;
        this._pickedWord = pickedWord;
    }
    EstrategiaCorrecta.prototype.verificar = function (actualWord, turn, ocurrenciasPalabra, conteoLetras) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (this._pickedWord.letras[i].valor === actualWord.letras[i].valor) {
                var letra = actualWord.letras[i].valor;
                if (ocurrenciasPalabra[letra] > 0) {
                    ocurrenciasPalabra[letra]--;
                }
                actualWord.letras[i].setEstadoCorrecta();
                this._interfaz.changeBackgroundPosition(turn, i, "correcta");
                this._interfaz.changeBackgroundKey(actualWord.letras[i].valor);
                conteoLetras[i] = true;
            }
        }
    };
    return EstrategiaCorrecta;
}());
export { EstrategiaCorrecta };
