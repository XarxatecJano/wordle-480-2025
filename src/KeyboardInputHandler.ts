export interface KeyboardInputHandler {
    isValidLetter(code: string): boolean;
    isEnterKey(code: string): boolean;
    isBackspaceKey(code: string): boolean;
    transformCodeToLetter(code: string): string;
    setCurrentPosition(position: number): void;
}