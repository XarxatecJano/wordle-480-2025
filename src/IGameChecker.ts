import { Interface } from "./Interface"

export interface IGameChecker {
    actualWord: string
    turn: number
    currentPosition: number
    interface: Interface
    isValidLetter(code: string): boolean;
    checkRightLetters(): void;
    checkMisplacedLetters(): void;
    checkWrongLetters(): void;
    checkWordIsRight(): void;
    checkGameIsOver(): void;
}

