import { KeyType } from "../enum/KeyType.js";

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
        console.log('Key.ts misplaced');
        if (this.state == KeyType.UNUSED || this.state == KeyType.USED) {
            this.state = KeyType.MISPLACED;
        }
    }

    private setRight() {
        console.log('Key.ts right');
        this.state = KeyType.RIGHT;
    }

    setState(state: KeyType) {
        console.log('me setean a: %s', state)
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