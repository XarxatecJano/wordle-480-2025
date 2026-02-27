import { EstrategiaVerificacion } from "./EstrategiaVerificacion.js";
import { Palabra } from "./Palabra.js";
import { Interface } from "./Interface.js";
import { MAX_WORD_SIZE } from "./env.js";
export class EstrategiaMalColocada implements EstrategiaVerificacion {
    private _interfaz: Interface;
    private _pickedWord: Palabra;

    constructor(interfaz: Interface, pickedWord: Palabra) {
        this._interfaz = interfaz;
        this._pickedWord = pickedWord;
    }

    verificar(actualWord: Palabra, turn: number, ocurrenciasPalabra: { [letra: string]: number }, conteoLetras: { [posicion: number]: boolean }): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            let letter = actualWord.letras[i];
            let pattern = new RegExp(letter.valor, "g");
            let numMatches = (this._pickedWord.toString().match(pattern) || []).length;

            if (numMatches > 0 && this._pickedWord.letras[i].valor !== letter.valor) {
                const letra = actualWord.letras[i].valor;

                if (ocurrenciasPalabra[letra] > 0 && !conteoLetras[i]) {
                    ocurrenciasPalabra[letra]--;
                    conteoLetras[i] = true;
                    actualWord.letras[i].setEstadoMalColocada();
                    this._interfaz.changeBackgroundPosition(turn, i, "mal_colocada");
                }
            }
        }
    }
}



