export interface IInputHandler {
    isValidLetter(code: String): boolean;
    isEnterKey(code: String): boolean;
    isBackspaceKey(code: String): boolean;
    transformCodeToLetter(code: string): string;
    setCurrentPosition(position: number): void;

}