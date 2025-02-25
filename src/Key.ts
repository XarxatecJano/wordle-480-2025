import { KeyState } from "./KeyState.js";

export class Key {
    private code: string;
    private state: KeyState = KeyState.UNUSED;
    constructor(code: string) {
        this.code = code
    }

    private setUsed() {
        if (this.state == KeyState.UNUSED) {
            this.state = KeyState.USED;
        }
    }

    private setMisplaced() {
        console.log('Key.ts misplaced');
        if (this.state == KeyState.UNUSED || this.state == KeyState.USED) {
            this.state = KeyState.MISPLACED;
        }
    }

    private setRight() {
        console.log('Key.ts right');
        this.state = KeyState.RIGHT;
    }

    setState(state: KeyState) {
        console.log('me setean a: %s', state)
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
    }

    getState(): KeyState {
        return this.state;
    }

    getCode(): string {
        return this.code;
    }
}