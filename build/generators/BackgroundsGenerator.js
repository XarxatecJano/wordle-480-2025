import { PanelBackgroundFalse } from "../background/PanelBackgroundFalse.js";
import { PanelBackgroundMisplace } from "../background/PanelBackgroundMisplace.js";
import { PanelBackgroundRight } from "../background/PanelBackgroundRIght.js";
var BackgroundGenerator = /** @class */ (function () {
    function BackgroundGenerator() {
    }
    BackgroundGenerator.prototype.generate = function (parameter) {
        var backgroundRight = new PanelBackgroundRight(parameter);
        var backgroundFalse = new PanelBackgroundFalse(parameter);
        var backgroundMisplace = new PanelBackgroundMisplace(parameter);
        var backgrounds = [];
        backgrounds.push(backgroundRight);
        backgrounds.push(backgroundMisplace);
        backgrounds.push(backgroundFalse);
        return backgrounds;
    };
    return BackgroundGenerator;
}());
export { BackgroundGenerator };
