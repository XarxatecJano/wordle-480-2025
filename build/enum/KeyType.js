export var KeyType;
(function (KeyType) {
    KeyType[KeyType["UNUSED"] = 0] = "UNUSED";
    KeyType[KeyType["WRONG"] = 1] = "WRONG";
    KeyType[KeyType["MISPLACED"] = 2] = "MISPLACED";
    KeyType[KeyType["RIGHT"] = 3] = "RIGHT";
})(KeyType || (KeyType = {}));
