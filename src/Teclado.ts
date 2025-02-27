import { Letra } from "./Letra";
import { Palabra } from "./Palabra";

export class Teclado {
    private validLetterCodes: string[];
    clavesUsadas: string[];
    letrasAcertadas: String[];
    ocurrenciasPalabra: { [letra: string]: number };
    conteoLetras: { [posicion: number]: boolean };

    constructor() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP",
            "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL",
            "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"
        ];
        this.clavesUsadas=[];
        this.letrasAcertadas=[];
        this.ocurrenciasPalabra = {};
        this.conteoLetras = {};
    }

    agregarClavesUsadas(word: string): void {
        for (const letra of word) {
            if (!this.clavesUsadas.includes(letra)) {
                this.clavesUsadas.push(letra);
            }
        }
    }
    acertadasEnVerde(): void {
        const keys: any = document.getElementsByClassName("key");
        for (let letra of this.letrasAcertadas) {
            for (let key of keys) {
                if (key.value === "Key" + letra) {
                    key.classList.add("keyPressedCorrect");
                }
            }
        }
    }
    agregarLetrasAcertadas(teclada: Palabra, palabra: Palabra): void {
        
        for (let i = 0; i < teclada.letras.length; i++) {
            const letraTeclada = teclada.letras[i];
            const letraPalabra = palabra.letras[i];
            if (letraTeclada.valor === letraPalabra.valor && letraTeclada.estado === "correcta") {
                this.letrasAcertadas.push(letraTeclada.valor);
            }
        }
    }
    rellenarDiccionario(palabra: Palabra): void {
        this.ocurrenciasPalabra = {}; 
        for (const letra of palabra.letras) {
            this.ocurrenciasPalabra[letra.valor] = (this.ocurrenciasPalabra[letra.valor] || 0) + 1;
        }
        
    }
    

    isValidLetter(code: string): boolean {
        return this.validLetterCodes.includes(code);
    }

    isEnterKey(code: string): boolean {
        return code === "Enter";
    }

    isBackspaceKey(code: string): boolean {
        return code === "Backspace";
    }

    transformCodeToLetter(code: string): string {
        if (code === "Semicolon") return "Ñ";
        return code.split("y")[1];
    }
}
