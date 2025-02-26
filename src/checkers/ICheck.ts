
import { WordState } from "../core/WordCheckerData";

export interface ICheck {
    check(wordData: WordState): void;
    checkType(): string; 
}
