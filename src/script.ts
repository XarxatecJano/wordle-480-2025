import {WordsGenerator} from "./game/word/WordsGenerator.js";
import {Word} from "./game/word/Word.js";
import {GameFlowManager} from "./game/GameFlowManager.js";
import {InputKeyboard} from "./input/InputKeyboard.js";
import { WORDS_COLLECTION } from "./env.js";
const wordsCollection: WordsGenerator = new WordsGenerator(WORDS_COLLECTION);

const pickedWord: Word = wordsCollection.getRandomWord();
console.log(pickedWord.getWordString());

const game: GameFlowManager = new GameFlowManager(pickedWord);
const inputKeyboard: InputKeyboard = new InputKeyboard(game);

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    inputKeyboard.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    inputKeyboard.newKeyPressed(e.code);
});