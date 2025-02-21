var Letra = /** @class */ (function () {
    function Letra(valor) {
        this._valor = valor.toUpperCase();
        this._estado = "pendiente";
    }
    Object.defineProperty(Letra.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Letra.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        enumerable: false,
        configurable: true
    });
    Letra.prototype.setEstadoCorrecta = function () {
        this._estado = "correcta";
    };
    Letra.prototype.setEstadoMalColocada = function () {
        this._estado = "mal_colocada";
    };
    Letra.prototype.setEstadoIncorrecta = function () {
        this._estado = "incorrecta";
    };
    Letra.prototype.esCorrecta = function () {
        return this._estado === "correcta";
    };
    Letra.prototype.esMalColocada = function () {
        return this._estado === "mal_colocada";
    };
    Letra.prototype.esIncorrecta = function () {
        return this._estado === "incorrecta";
    };
    return Letra;
}());
export { Letra };
