import {Words} from "./Words.js";
import {Word} from "./Word.js";
import {Game} from "./Game.js";
import {InputKeyboard} from "./InputKeyboard.js"
const wordsCollection: Words = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: Word = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: Game = new Game(pickedWord);
const keyboard: InputKeyboard = new InputKeyboard(game);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    keyboard.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    keyboard.newKeyPressed(e.code);
});