export interface IInputHandler {
    isValidCodeLetter(code: string): boolean
    OnKeyPress(code: string): boolean
}