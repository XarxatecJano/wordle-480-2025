export class Letra {
    private _valor: string;
    private _estado: "correcta" | "mal_colocada" | "incorrecta" | "pendiente";

    constructor(valor: string) {
        this._valor = valor.toUpperCase(); 
        this._estado = "pendiente"; 
    }

    get valor(): string {
        return this._valor;
    }

    get estado(): string {
        return this._estado;
    }

    setEstadoCorrecta(): void {
        this._estado = "correcta";
    }

    setEstadoMalColocada(): void {
        this._estado = "mal_colocada";
    }

    setEstadoIncorrecta(): void {
        this._estado = "incorrecta";
    }

    esCorrecta(): boolean {
        return this._estado === "correcta";
    }

    esMalColocada(): boolean {
        return this._estado === "mal_colocada";
    }

    esIncorrecta(): boolean {
        return this._estado === "incorrecta";
    }
}
