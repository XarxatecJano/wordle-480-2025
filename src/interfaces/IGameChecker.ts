import { ColourSetMaps } from "../controllers/ColourSetMaps.js"
import { Interface } from "../core/Interface.js"

export interface IGameChecker {
    pickedWord: string
    actualWord: string
    turn: number
    interface: Interface
    checkRightLetters(dictOfWordLetters: ColourSetMaps): void;
    checkMisplacedLetters(dictOfWordLetters: ColourSetMaps): void;
    checkWrongLetters(dictOfWordLetters: ColourSetMaps): void;
    checkWordIsRight(): void;
    checkGameIsOver(): void;
}

