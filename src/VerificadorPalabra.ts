import { EstrategiaVerificacion } from "./EstrategiaVerificacion.js";
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Palabra } from "./Palabra.js";
import { Teclado } from "./Teclado.js";
import { Interface } from "./Interface.js";
export class VerificadorPalabra {
    private _pickedWord: Palabra;
    private _interface: Interface;
    private estrategias: EstrategiaVerificacion[];

    constructor(pickedWord: Palabra, interfaz: Interface) {
        this._pickedWord = pickedWord;
        this._interface = interfaz;
        this.estrategias = [];
    }

    setEstrategias(estrategias: EstrategiaVerificacion[]): void {
        this.estrategias = estrategias;
    }

    checkWord(actualWord: Palabra, turn: number, ocurrenciasPalabra: { [letra: string]: number }, conteoLetras: { [posicion: number]: boolean }): void {
        if (actualWord.toString() === this._pickedWord.toString()) {
            location.assign("/winner");
        }

        for (let estrategia of this.estrategias) {
            estrategia.verificar(actualWord, turn, ocurrenciasPalabra, conteoLetras);
        }

        if (turn >= MAX_ATTEMPTS) {
            if (actualWord.toString() === this._pickedWord.toString()) {
                location.assign("/winner");
            } else {
                location.assign("/loser");
            }
        }
    }
}
