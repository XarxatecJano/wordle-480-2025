var KeyboardStylerImpl = /** @class */ (function () {
    function KeyboardStylerImpl(domAccess) {
        this.domAccess = domAccess;
    }
    KeyboardStylerImpl.prototype.highlightKey = function (code) {
        if (code !== "Enter" && code !== "Backspace") {
            var keys = this.domAccess.getElementsByClassName("key");
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key.getAttribute("value") === code) {
                    key.classList.add(KeyboardStylerImpl.CLASS_KEY_PRESSED);
                }
            }
        }
    };
    KeyboardStylerImpl.CLASS_KEY_PRESSED = "keyPressed";
    return KeyboardStylerImpl;
}());
export { KeyboardStylerImpl };
