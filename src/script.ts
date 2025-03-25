import { GameFactory } from "./GameFactory.js";

const words = [
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

const game = GameFactory.createGame(words);

Array.from(document.getElementsByClassName("key")).forEach((element) =>
    element.addEventListener("click", (e) => {
        game.newKeyPressed((<HTMLButtonElement>e.target).value);
    })
);

document.addEventListener("keydown", (e) => {
    console.log("tecla presionada:", {
        code: e.code,
        key: e.key,
        keyCode: e.keyCode
    });
    game.newKeyPressed(e.code);
});
