import { LOCATION_GAME_OVER, LOCATION_WIN } from "../env.js";
var GameUtil = /** @class */ (function () {
    function GameUtil() {
    }
    GameUtil.win = function () { location.assign(LOCATION_WIN); };
    GameUtil.gameOver = function () { location.assign(LOCATION_GAME_OVER); };
    return GameUtil;
}());
export { GameUtil };
