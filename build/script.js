import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { POSSIBLE_WORDS } from "./env.js";
var wordsCollection = new Word(POSSIBLE_WORDS);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var game = new Game(pickedWord);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    game.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    game.newKeyPressed(e.code);
});
