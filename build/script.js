import { WordsGenerator } from "./game/word/WordsGenerator.js";
import { GameFlowManager } from "./game/GameFlowManager.js";
import { InputKeyboard } from "./input/InputKeyboard.js";
import { WORDS_COLLECTION } from "./env.js";
var wordsCollection = new WordsGenerator(WORDS_COLLECTION);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord.getWordString());
var game = new GameFlowManager(pickedWord);
var inputKeyboard = new InputKeyboard(game);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    inputKeyboard.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    inputKeyboard.newKeyPressed(e.code);
});
