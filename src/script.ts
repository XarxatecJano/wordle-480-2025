import { Game } from "./Game.js";
import { NewKeyPressed } from "./Keyboard/NewKeyPressed.js";
import {Words} from "./Words.js";



const wordsCollection: Words = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game:Game = Game.getInstance(pickedWord)
const newKeys: NewKeyPressed = new NewKeyPressed(game);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    newKeys.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    newKeys.newKeyPressed(e.code);
});