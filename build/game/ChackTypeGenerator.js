import { CheckTypeMisplaced } from "../check/CheckTypeMisplaced.js";
import { CheckTypeRight } from "../check/CheckTypeRight.js";
import { CheckTypeWrong } from "../check/CheckTypeWrong.js";
var CheckTypeGenerator = /** @class */ (function () {
    function CheckTypeGenerator() {
    }
    CheckTypeGenerator.prototype.generate = function (parameter) {
        var checkTypeRight = new CheckTypeRight(parameter);
        var checkTypeMisplaced = new CheckTypeMisplaced(parameter);
        var checkTypeWrong = new CheckTypeWrong(parameter);
        var checkTypes = [checkTypeRight, checkTypeMisplaced, checkTypeWrong];
        return checkTypes;
    };
    return CheckTypeGenerator;
}());
export { CheckTypeGenerator };
