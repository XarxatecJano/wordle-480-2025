export var KeyState;
(function (KeyState) {
    KeyState[KeyState["UNUSED"] = 0] = "UNUSED";
    KeyState[KeyState["USED"] = 1] = "USED";
    KeyState[KeyState["MISPLACED"] = 2] = "MISPLACED";
    KeyState[KeyState["RIGHT"] = 3] = "RIGHT";
})(KeyState || (KeyState = {}));
