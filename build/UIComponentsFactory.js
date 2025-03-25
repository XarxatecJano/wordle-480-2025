import { DOMAccessImpl } from "./DOMAccesImpl.js";
import { LetterDisplayImpl } from "./LetterDisplayImpl.js";
import { CellStylerImpl } from "./CellStylerImpl.js";
import { KeyboardStylerImpl } from "./KeyboardStylerImpl.js";
var UIComponentsFactory = /** @class */ (function () {
    function UIComponentsFactory() {
    }
    UIComponentsFactory.createDOMAccess = function () {
        return new DOMAccessImpl();
    };
    UIComponentsFactory.createLetterDisplay = function (domAccess) {
        return new LetterDisplayImpl(domAccess);
    };
    UIComponentsFactory.createCellStyler = function (domAccess) {
        return new CellStylerImpl(domAccess);
    };
    UIComponentsFactory.createKeyboardStyler = function (domAccess) {
        return new KeyboardStylerImpl(domAccess);
    };
    return UIComponentsFactory;
}());
export { UIComponentsFactory };
