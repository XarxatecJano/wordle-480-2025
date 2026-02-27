import { Letra } from "./Letra.js";

export class Palabra {
    private _letras: Letra[];

    constructor(palabra: string) {
        this._letras = palabra.split("").map(letra => new Letra(letra));
    }

    get letras(): Letra[] {
        return this._letras;
    }

    agregarLetra(letra: Letra): void {
        if (this._letras.length < 5) {
            this._letras.push(letra);
        }
    }

    borrarUltimaLetra(): void {
        this._letras.pop();
    }

    esIgualA(otraPalabra: Palabra): boolean {
        return this.toString() === otraPalabra.toString();
    }

    toString(): string {
        return this._letras.map(letra => letra.valor).join("");
    }
}
