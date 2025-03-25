var DOMAccessImpl = /** @class */ (function () {
    function DOMAccessImpl() {
    }
    DOMAccessImpl.prototype.getELementById = function (id) {
        return document.getElementById(id);
    };
    DOMAccessImpl.prototype.getElementsByClassName = function (classname) {
        return document.getElementsByClassName(classname);
    };
    return DOMAccessImpl;
}());
export { DOMAccessImpl };
