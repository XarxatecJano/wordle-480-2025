import { GameFactory } from "./GameFactory.js";
var words = [
    "JUEGO",
    "TALAR",
    "BAILE",
    "ANDAR",
    "MONTE",
    "PLAYA",
    "PLATA",
    "ARBOL",
    "QUESO",
];
var game = GameFactory.createGame(words);
Array.from(document.getElementsByClassName("key")).forEach(function (element) {
    return element.addEventListener("click", function (e) {
        game.newKeyPressed(e.target.value);
    });
});
document.addEventListener("keydown", function (e) {
    console.log("tecla presionada:", {
        code: e.code,
        key: e.key,
        keyCode: e.keyCode
    });
    game.newKeyPressed(e.code);
});
