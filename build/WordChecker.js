var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Interface } from "./Interface";
var MAX_WORD_SIZE = 5;
var WordChecker = /** @class */ (function (_super) {
    __extends(WordChecker, _super);
    /*private interface: Interface;

    constructor(interfaceInstance: Interface) {
        this.interface = interfaceInstance;
    }*/
    function WordChecker() {
        return _super.call(this) || this;
    }
    WordChecker.prototype.check = function (actualWord, pickedWord, turn) {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            if (pickedWord[i] === actualWord[i]) {
                this.changeBackgroundPosition(turn, i, "rightLetter");
            }
        }
    };
    return WordChecker;
}(Interface));
export { WordChecker };
