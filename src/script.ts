import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { Palabra } from "./Palabra.js";

const wordsCollection: Word = new Word([
    "JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", 
    "PLAYA", "PLATA", "ARBOL", "QUESO"
]);

const pickedWord: Palabra = wordsCollection.getRandomWord(); 

console.log(pickedWord.toString()); 

const game: Game = Game.getInstance(pickedWord); 
game.iniciarJuego();


Array.from(document.getElementsByClassName("key")).forEach(element => 
    element.addEventListener("click", (e) => {
        game.newKeyPressed((<HTMLButtonElement>e.target).value);
    })
);


document.addEventListener("keydown", (e) => {
    game.newKeyPressed(e.code);
});
