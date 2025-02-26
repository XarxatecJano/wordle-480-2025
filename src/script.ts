import {Words} from "./Words.js";
import { NewKeyPressed } from "./Keyboard/NewKeyPressed.js";


const wordsCollection: Words = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: NewKeyPressed = new NewKeyPressed(pickedWord);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});