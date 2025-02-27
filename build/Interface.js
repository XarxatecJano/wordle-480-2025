var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.setNewLetter = function (turn, position, letter) {
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            row.children[position].textContent = letter;
        }
    };
    Interface.prototype.deleteLetter = function (turn, position) {
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            row.children[position].textContent = "";
        }
    };
    Interface.prototype.changeBackgroundPosition = function (turn, position, state) {
        var positionClass = "cell-grey";
        if (state === "correcta")
            positionClass = "cell-green";
        if (state === "mal_colocada")
            positionClass = "cell-orange";
        var row = document.getElementById("row_".concat(turn));
        if (row) {
            row.children[position].classList.add(positionClass);
        }
    };
    Interface.prototype.changeBackgroundKey = function (code) {
        var keys = document.getElementsByClassName("key");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    };
    Interface.prototype.resetBackgroundKeys = function (word, teclado) {
        var lastLetter = word[word.length - 1];
        var oldWord = word.slice(0, word.length - 1);
        if (!oldWord.includes(lastLetter)) {
            var keys = document.getElementsByClassName("keyPressed");
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                var letraTecla = teclado.transformCodeToLetter(key.value);
                if (!teclado.clavesUsadas.includes(letraTecla) && key.value == "Key" + lastLetter) {
                    key.classList.remove("keyPressed");
                }
            }
        }
    };
    Interface.prototype.changeBackgroundKeyAfter = function (code, teclado) {
        var keys = document.getElementsByClassName("key");
        for (var i = 0; i < code.letras.length; i++) {
            var letra = code.letras[i];
            var estado = letra.estado;
            for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
                var key = keys_3[_i];
                if (key.value === "Key" + letra.valor) {
                    key.classList.remove("keyPressed", "keyPressedOnBadPosition");
                    if (!teclado.letrasAcertadas.includes(letra.valor)) {
                        if (estado === "mal_colocada") {
                            key.classList.add("keyPressedOnBadPosition");
                        }
                        else {
                            key.classList.add("keyPressed");
                        }
                    }
                }
            }
        }
    };
    return Interface;
}());
export { Interface };
