var Teclado = /** @class */ (function () {
    function Teclado() {
        this.validLetterCodes = [
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP",
            "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL",
            "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"
        ];
        this.clavesUsadas = [];
        this.letrasAcertadas = [];
        this.ocurrenciasPalabra = {};
        this.conteoLetras = {};
    }
    Teclado.prototype.agregarClavesUsadas = function (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var letra = word_1[_i];
            if (!this.clavesUsadas.includes(letra)) {
                this.clavesUsadas.push(letra);
            }
        }
    };
    Teclado.prototype.acertadasEnVerde = function () {
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, _a = this.letrasAcertadas; _i < _a.length; _i++) {
            var letra = _a[_i];
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (key.value === "Key" + letra) {
                    key.classList.add("cell-green");
                    console.log("cambiada");
                }
            }
        }
    };
    Teclado.prototype.agregarLetrasAcertadas = function (teclada, palabra) {
        for (var i = 0; i < teclada.letras.length; i++) {
            var letraTeclada = teclada.letras[i];
            var letraPalabra = palabra.letras[i];
            if (letraTeclada.valor === letraPalabra.valor && letraTeclada.estado === "correcta") {
                this.letrasAcertadas.push(letraTeclada.valor);
            }
        }
    };
    Teclado.prototype.rellenarDiccionario = function (palabra) {
        this.ocurrenciasPalabra = {};
        for (var _i = 0, _a = palabra.letras; _i < _a.length; _i++) {
            var letra = _a[_i];
            this.ocurrenciasPalabra[letra.valor] = (this.ocurrenciasPalabra[letra.valor] || 0) + 1;
        }
    };
    Teclado.prototype.isValidLetter = function (code) {
        return this.validLetterCodes.includes(code);
    };
    Teclado.prototype.isEnterKey = function (code) {
        return code === "Enter";
    };
    Teclado.prototype.isBackspaceKey = function (code) {
        return code === "Backspace";
    };
    Teclado.prototype.transformCodeToLetter = function (code) {
        if (code === "Semicolon")
            return "Ñ";
        return code.split("y")[1];
    };
    return Teclado;
}());
export { Teclado };
