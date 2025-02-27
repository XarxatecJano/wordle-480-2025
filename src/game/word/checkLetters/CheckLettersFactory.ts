import { checkMisplacedAndWrongLetters } from "./CheckMisplacedAndWrongLetters.js";
import { checkRightLetters } from "./CheckRightLetters.js";
import { GameState } from "../../GameState.js";
import { CheckLetters } from "./CheckLetters.js";
import { KeyState } from "../../../interface/keyboard/KeyState.js";
import { Word } from "../Word.js";

export class CheckLettersFactory {
    private charCount: { [key: string]: number };

    private gameState: GameState;
    constructor(gameState: GameState){
        this.charCount = this.createDictionary(gameState.pickedWord);
        this.gameState = gameState;
    }

    check(type: KeyState) {
        let checkLetters: CheckLetters;
        console.log(this.charCount);
        switch (type) {
            case KeyState.RIGHT:
                checkLetters = new checkRightLetters();
                break;
            case KeyState.MISPLACED:
                checkLetters = new checkMisplacedAndWrongLetters();
                break;
            default:
                throw new Error("Tipo desconocido: " + type);
        }
        this.charCount = checkLetters.check(this.gameState, this.charCount);
    }

    private createDictionary(pickedWord: Word): { [key: string]: number } {
        let charactersCount: { [key: string]: number } = {};
        for (let letter of pickedWord.getLetters()) {
            const char = letter.getChar();
            if (charactersCount[char]) {
                charactersCount[char]++;
            } else {
                charactersCount[char] = 1;
            }
        }
        return charactersCount;
    }
}