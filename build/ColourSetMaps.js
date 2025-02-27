import { MAX_WORD_SIZE } from "./env.js";
var ColourSetMaps = /** @class */ (function () {
    function ColourSetMaps() {
        this._colorMap = new Map;
        this._choosenPosition = new Map;
    }
    ColourSetMaps.prototype.setColourMap = function (pickedWord) {
        this.setChoosenPositionMap();
        this.setColorMap(pickedWord);
    };
    ColourSetMaps.prototype.setChoosenPositionMap = function () {
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            this._choosenPosition.set(i, false);
        }
    };
    ColourSetMaps.prototype.setColorMap = function (pickedWord) {
        var actualLetter = "";
        var pattern;
        for (var i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = pickedWord[i];
            pattern = new RegExp(actualLetter, "g");
            this._colorMap.set(actualLetter, (pickedWord.match(pattern) || []).length);
        }
    };
    Object.defineProperty(ColourSetMaps.prototype, "ChoosenPositionMap", {
        get: function () {
            return this._choosenPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColourSetMaps.prototype, "ColorMap", {
        get: function () {
            return this._colorMap;
        },
        enumerable: false,
        configurable: true
    });
    return ColourSetMaps;
}());
export { ColourSetMaps };
