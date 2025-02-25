import { KeyType } from "../enum/KeyType.js";
var Key = /** @class */ (function () {
    function Key(code) {
        this.state = KeyType.UNUSED;
        this.code = code;
    }
    Key.prototype.setUsed = function () {
        if (this.state == KeyType.UNUSED) {
            this.state = KeyType.USED;
        }
    };
    Key.prototype.setMisplaced = function () {
        console.log('Key.ts misplaced');
        if (this.state == KeyType.UNUSED || this.state == KeyType.USED) {
            this.state = KeyType.MISPLACED;
        }
    };
    Key.prototype.setRight = function () {
        console.log('Key.ts right');
        this.state = KeyType.RIGHT;
    };
    Key.prototype.setState = function (state) {
        console.log('me setean a: %s', state);
        switch (state) {
            case KeyType.USED:
                this.setUsed();
                break;
            case KeyType.MISPLACED:
                this.setMisplaced();
                break;
            case KeyType.RIGHT:
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
