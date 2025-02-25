import { Words } from "./Words.js";
import { Game } from "./Game.js";
import { InputKeyboard } from "./InputKeyboard.js";
var wordsCollection = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = new Game(pickedWord);
var inputKeyboard = new InputKeyboard(game);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    inputKeyboard.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    inputKeyboard.newKeyPressed(e.code);
});
