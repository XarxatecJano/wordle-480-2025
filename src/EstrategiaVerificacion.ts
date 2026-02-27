import { Palabra } from "./Palabra.js";
export interface EstrategiaVerificacion {
    verificar(actualWord: Palabra, turn: number, ocurrenciasPalabra: { [letra: string]: number }, conteoLetras: { [posicion: number]: boolean }): void;
}
