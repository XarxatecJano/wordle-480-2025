import { Interface } from "./Interface"

export interface IGameChecker {
    actualLetters: string
    actualWord: string
    turn: number
    actualPosition: number
    interface: Interface
    isValidLetter(code: string): boolean;
    checkRightLetters(): void;
    checkMisplacedLetters(): void;
    checkWrongLetters(): void;
    checkWordIsRight(): void;
    checkGameIsOver(): void;
}

