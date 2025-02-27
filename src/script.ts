import { Game } from "./Game/Game.js";
import { NewKeyPressed } from "./Keyboard/NewKeyPressed.js";
import { INavigationService } from "./Navigation/INavigationService.js";
import { NavigationSerivce } from "./Navigation/WinnerNavigation.js";
import {Words} from "./Words.js";



const wordsCollection: Words = new Words(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
const navigation:INavigationService = new NavigationSerivce;
console.log(pickedWord);

const game:Game = Game.getInstance(pickedWord, navigation)
const newKeys: NewKeyPressed = new NewKeyPressed(game);


Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    newKeys.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    newKeys.newKeyPressed(e.code);
});