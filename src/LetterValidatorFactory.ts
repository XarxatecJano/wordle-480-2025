import { LetterValidator } from "./LetterValidator.js";

export class LetterValidatorFactory {
    static createValidator() {
        return new LetterValidator();
    }
}
