import { Game } from "./Game.js";
import { NewKeyPressed } from "./Keyboard/NewKeyPressed.js";
import { Words } from "./Words.js";
var wordsCollection = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = Game.getInstance(pickedWord);
var newKeys = new NewKeyPressed(game);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    newKeys.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    newKeys.newKeyPressed(e.code);
});
