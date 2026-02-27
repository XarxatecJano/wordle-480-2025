import {Word} from "./core/Word.js";
import {Game} from "./core/Game.js";
import { LetterKeyPressed } from "./inputHandlers/LetterKeyPressed.js";


const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: Game = Game.getInstance(pickedWord);
const keyPressed:LetterKeyPressed = new LetterKeyPressed(game)


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    keyPressed.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    console.log(e.code);
    keyPressed.newKeyPressed(e.code);
});