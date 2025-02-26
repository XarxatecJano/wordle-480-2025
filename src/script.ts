import {Word} from "./Word.js";
import {Game} from "./Game.js";
import { POSSIBLE_WORDS } from "./env.js";

const wordsCollection: Word = new Word(POSSIBLE_WORDS);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: Game = new Game(pickedWord);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.newKeyPressed(e.code);
});