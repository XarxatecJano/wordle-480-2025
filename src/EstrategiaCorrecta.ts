import { EstrategiaVerificacion } from "./EstrategiaVerificacion.js";
import { Palabra } from "./Palabra.js";
import { Interface } from "./Interface.js";
import { MAX_WORD_SIZE } from "./env.js";

export class EstrategiaCorrecta implements EstrategiaVerificacion {
    private _interfaz: Interface;
    private _pickedWord: Palabra;

    constructor(interfaz: Interface, pickedWord: Palabra) {
        this._interfaz = interfaz;
        this._pickedWord = pickedWord;
    }

    verificar(actualWord: Palabra, turn: number, ocurrenciasPalabra: { [letra: string]: number }, conteoLetras: { [posicion: number]: boolean }): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this._pickedWord.letras[i].valor === actualWord.letras[i].valor) {
                const letra = actualWord.letras[i].valor;
                if (ocurrenciasPalabra[letra] > 0) { 
                    ocurrenciasPalabra[letra]--;  
                }
                actualWord.letras[i].setEstadoCorrecta();
                this._interfaz.changeBackgroundPosition(turn, i, "correcta");
                this._interfaz.changeBackgroundKey(actualWord.letras[i].valor);
                conteoLetras[i] = true;
            }
        }
    }
}
