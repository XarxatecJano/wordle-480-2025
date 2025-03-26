import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { GameUI } from "./GameUI.js";
import { InputManager } from "./InputManager.js";
import { WordValidator } from "./WordValidator.js";
import { ResultManager } from "./ResultManager.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "./env.js";
var wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
var pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
var ui = new GameUI();
var inputManager = new InputManager();
var wordValidator = new WordValidator();
var resultManager = new ResultManager();
var game = new Game(pickedWord, ui, inputManager, wordValidator, resultManager, MAX_ATTEMPTS, MAX_WORD_SIZE);
Array.from(document.getElementsByClassName("key")).forEach(function (element) { return element.addEventListener("click", function (e) {
    game.newKeyPressed(e.target.value);
}); });
document.addEventListener("keydown", function (e) {
    game.newKeyPressed(e.code);
});
