export var KeyState;
(function (KeyState) {
    KeyState[KeyState["UNUSED"] = 0] = "UNUSED";
    KeyState[KeyState["WRONG"] = 1] = "WRONG";
    KeyState[KeyState["MISPLACED"] = 2] = "MISPLACED";
    KeyState[KeyState["RIGHT"] = 3] = "RIGHT";
})(KeyState || (KeyState = {}));
