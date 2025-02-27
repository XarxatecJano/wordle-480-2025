import { Word } from "./core/Word.js";
import { Game } from "./core/Game.js";
import { LetterKeyPressed } from "./inputHandlers/LetterKeyPressed.js";
var wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = Game.getInstance(pickedWord);
var keyPressed = new LetterKeyPressed(game);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    keyPressed.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    console.log(e.code);
    keyPressed.newKeyPressed(e.code);
});
