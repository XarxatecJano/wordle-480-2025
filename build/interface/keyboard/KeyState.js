export var KeyState;
(function (KeyState) {
    KeyState[KeyState["UNUSED"] = 0] = "UNUSED";
    KeyState[KeyState["USED"] = 1] = "USED";
    KeyState[KeyState["WRONG"] = 2] = "WRONG";
    KeyState[KeyState["MISPLACED"] = 3] = "MISPLACED";
    KeyState[KeyState["RIGHT"] = 4] = "RIGHT";
})(KeyState || (KeyState = {}));
