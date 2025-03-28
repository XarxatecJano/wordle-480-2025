export const MAX_WORD_SIZE:number = 5;
export const MAX_ATTEMPTS:number = 6;
export const WORDS = ["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]
export const VALID_LETTER_CODES: string[] = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
export const enum RESULT_CLASS_LETTERS {UNDEFINED = "", RIGHT = "rightLetter", MISPLACED = "misplacedLetter", WRONG = "wrongLetter"};
export const enum RESULT_CLASS_POSITION {GREEN = "cell-green", GREY = "cell-grey", ORANGE = "cell-orange"}
export const enum KEY_PRESSED_CLASS {KEY_PRESSED = "keyPressed"}
export const enum INPUT_KEYS {ENTER = "Enter", BACKSPACE = "Backspace"}