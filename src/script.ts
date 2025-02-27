import {WordGenerator} from "./word/WordGenerator.js";
import {Word} from "./word/Word.js";
import {Game} from "./game/Game.js";
import {InputKeyboard} from "./input/InputKeyboard.js";
import { WORDS_COLLECTION } from "./env.js";
const wordsCollection: WordGenerator = new WordGenerator(WORDS_COLLECTION);

const pickedWord: Word = wordsCollection.getRandomWord();
console.log(pickedWord.getWordString());

const game: Game = new Game(pickedWord);
const inputKeyboard: InputKeyboard = new InputKeyboard(game);

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    inputKeyboard.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    inputKeyboard.newKeyPressed(e.code);
});