import { ColourSetMaps } from "../controllers/ColourSetMaps.js";
import { PositionManager } from "./PositionController.js";
var UpdateManager = /** @class */ (function () {
    function UpdateManager(checker) {
        this.checker = checker;
        this._positionManager = PositionManager.getInstance();
    }
    UpdateManager.getInstance = function (checker) {
        if (!UpdateManager._instance) {
            UpdateManager._instance = new UpdateManager(checker);
        }
        return UpdateManager._instance;
    };
    UpdateManager.prototype.updateAfterNewWord = function () {
        var mapController = new ColourSetMaps();
        mapController.setColourMap(this.checker.pickedWord);
        this.checker.checkRightLetters(mapController);
        this.checker.checkMisplacedLetters(mapController);
        this.checker.checkWrongLetters(mapController);
        this.resetElementsOfLine();
    };
    UpdateManager.prototype.resetElementsOfLine = function () {
        this.checker.turn++;
        this._positionManager.resetCurrentPosition();
        this.checker.actualWord = "";
    };
    return UpdateManager;
}());
export { UpdateManager };
