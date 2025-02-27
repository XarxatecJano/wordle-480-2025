import { MAX_WORD_SIZE } from "./env.js";
var EstrategiaIncorrecta = /** @class */ (function () {
    function EstrategiaIncorrecta(interfaz, pickedWord) {
        this._interfaz = interfaz;
        this._pickedWord = pickedWord;
    }
    EstrategiaIncorrecta.prototype.verificar = function (actualWord, turn, ocurrenciasPalabra, conteoLetras) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            var letter = actualWord.letras[i];
            var pattern = new RegExp(letter.valor, "g");
            var numMatches = (this._pickedWord.toString().match(pattern) || []).length;
            var letra = actualWord.letras[i].valor;
            if (numMatches === 0 || (ocurrenciasPalabra[letra] === 0 && !(i in conteoLetras))) {
                actualWord.letras[i].setEstadoIncorrecta();
                this._interfaz.changeBackgroundPosition(turn, i, "incorrecta");
            }
        }
    };
    return EstrategiaIncorrecta;
}());
export { EstrategiaIncorrecta };
