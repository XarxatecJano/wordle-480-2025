import {Word} from "./Word.js";
import {Game} from "./Game.js";
import {GameUI} from "./GameUI.js";
import { InputManager } from "./InputManager.js";
import { WordValidator } from "./WordValidator.js";
import { ResultManager } from "./ResultManager.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "./env.js";

const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const ui = new GameUI();
const inputManager = new InputManager();
const wordValidator = new WordValidator();
const resultManager = new ResultManager();

const game: Game = new Game(pickedWord, ui, inputManager,wordValidator,resultManager, MAX_ATTEMPTS, MAX_WORD_SIZE);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});