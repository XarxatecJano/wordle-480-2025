
import { WordState } from "../core/WordCheckerData";

export interface ICheck {
    checkLetters(wordData: WordState): void;
    checkType(): string; 
}
