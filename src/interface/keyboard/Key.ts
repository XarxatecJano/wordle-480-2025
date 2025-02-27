import { KeyType } from "./KeyType.js";

export class Key {
    private code: string;
    private state: KeyType = KeyType.UNUSED;
    constructor(code: string) {
        this.code = code
    }

    private setUsed() {
        if (this.state == KeyType.UNUSED) {
            this.state = KeyType.USED;
        }
    }

    private setMisplaced() {
        if (this.state == KeyType.UNUSED || this.state == KeyType.USED) {
            this.state = KeyType.MISPLACED;
        }
    }

    private setRight() {
        this.state = KeyType.RIGHT;
    }

    setState(state: KeyType) {
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
    }

    getState(): KeyType {
        return this.state;
    }

    getCode(): string {
        return this.code;
    }
}