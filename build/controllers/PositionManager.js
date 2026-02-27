import { MAX_WORD_SIZE } from "../core/env";
var PositionManager = /** @class */ (function () {
    function PositionManager() {
        this._INITIAL_POSITION = 0;
        this._currentPosition = this._INITIAL_POSITION;
    }
    PositionManager.getInstance = function () {
        if (!PositionManager._instance) {
            PositionManager._instance = new PositionManager();
        }
        return PositionManager._instance;
    };
    Object.defineProperty(PositionManager.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        set: function (num) {
            this._currentPosition = num;
        },
        enumerable: false,
        configurable: true
    });
    PositionManager.prototype.isValidPosition = function () {
        return this.currentPosition < MAX_WORD_SIZE;
    };
    PositionManager.prototype.resetCurrentPosition = function () {
        this._currentPosition = 0;
    };
    PositionManager.prototype.nextPosition = function () {
        this.currentPosition++;
    };
    return PositionManager;
}());
export { PositionManager };
