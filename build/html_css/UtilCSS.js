var UtilCSS = /** @class */ (function () {
    function UtilCSS() {
    }
    UtilCSS.addClass = function (key, className) {
        key.classList.add(className);
    };
    UtilCSS.removeClass = function (key, className) {
        key.classList.remove(className);
    };
    UtilCSS.removeFocus = function (key) {
        key.blur();
    };
    return UtilCSS;
}());
export { UtilCSS };
