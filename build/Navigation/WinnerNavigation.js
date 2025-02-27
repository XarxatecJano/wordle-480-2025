var NavigationSerivce = /** @class */ (function () {
    function NavigationSerivce() {
    }
    NavigationSerivce.prototype.navigateTo = function (url) {
        location.assign(url);
    };
    return NavigationSerivce;
}());
export { NavigationSerivce };
