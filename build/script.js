import { WordGenerator } from "./utils/WordGenerator.js";
import { Game } from "./Game.js";
import { InputKeyboard } from "./input/InputKeyboard.js";
import { WORDS_COLLECTION } from "./env.js";
var wordsCollection = new WordGenerator(WORDS_COLLECTION);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord.getWordString());
var game = new Game(pickedWord);
var inputKeyboard = new InputKeyboard(game);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    inputKeyboard.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    inputKeyboard.newKeyPressed(e.code);
});
