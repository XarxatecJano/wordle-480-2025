import { LetterValidator } from "./LetterValidator.js";
var LetterValidatorFactory = /** @class */ (function () {
    function LetterValidatorFactory() {
    }
    LetterValidatorFactory.createValidator = function () {
        return new LetterValidator();
    };
    return LetterValidatorFactory;
}());
export { LetterValidatorFactory };
