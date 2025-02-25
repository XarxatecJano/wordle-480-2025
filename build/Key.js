import { KeyState } from "./KeyState.js";
var Key = /** @class */ (function () {
    function Key(code) {
        this.state = KeyState.UNUSED;
        this.code = code;
    }
    Key.prototype.setUsed = function () {
        if (this.state == KeyState.UNUSED) {
            this.state = KeyState.USED;
        }
    };
    Key.prototype.setMisplaced = function () {
        console.log('Key.ts misplaced');
        if (this.state == KeyState.UNUSED || this.state == KeyState.USED) {
            this.state = KeyState.MISPLACED;
        }
    };
    Key.prototype.setRight = function () {
        console.log('Key.ts right');
        this.state = KeyState.RIGHT;
    };
    Key.prototype.setState = function (state) {
        console.log('me setean a: %s', state);
        switch (state) {
            case KeyState.USED:
                this.setUsed();
                break;
            case KeyState.MISPLACED:
                this.setMisplaced();
                break;
            case KeyState.RIGHT:
                this.setRight();
                break;
        }
    };
    Key.prototype.getState = function () {
        return this.state;
    };
    Key.prototype.getCode = function () {
        return this.code;
    };
    return Key;
}());
export { Key };
