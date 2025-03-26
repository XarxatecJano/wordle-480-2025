var KeyboardUI = /** @class */ (function () {
    function KeyboardUI() {
    }
    KeyboardUI.prototype.changeKeyColor = function (code) {
        var keys = document.getElementsByClassName("key");
        for (var i = 0; i < keys.length; i++) {
            var keyElement = keys[i];
            if (keyElement.value === code && code !== "Enter" && code !== "Backspace") {
                keyElement.classList.add("keyPressed");
            }
        }
    };
    return KeyboardUI;
}());
export { KeyboardUI };
