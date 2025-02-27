import { ColourSetMaps } from "./ColourSetMaps.js"
import { Interface } from "./Interface"

export interface IGameChecker {
    pickedWord: string
    actualWord: string
    turn: number
    currentPosition: number
    interface: Interface
    isValidLetter(code: string): boolean;
    checkRightLetters(dictOfWordLetters: ColourSetMaps): void;
    checkMisplacedLetters(dictOfWordLetters: ColourSetMaps): void;
    checkWrongLetters(dictOfWordLetters: ColourSetMaps): void;
    checkWordIsRight(): void;
    checkGameIsOver(): void;
}

