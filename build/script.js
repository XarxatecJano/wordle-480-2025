import { Words } from "./Words.js";
import { NewKeyPressed } from "./Keyboard/NewKeyPressed.js";
var wordsCollection = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = new NewKeyPressed(pickedWord);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    game.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    game.newKeyPressed(e.code);
});
