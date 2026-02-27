import { KeyState } from "./KeyState.js";

export class Key {
    private code: string;
    private state: KeyState = KeyState.UNUSED;
    constructor(code: string) {
        this.code = code
    }

    private setWrong() {
        if (this.state == KeyState.UNUSED) {
            this.state = KeyState.WRONG;
        }
    }

    private setMisplaced() {
        if (this.state == KeyState.UNUSED || this.state == KeyState.WRONG) {
            this.state = KeyState.MISPLACED;
        }
    }

    private setRight() {
        this.state = KeyState.RIGHT;
    }

    setState(state: KeyState) {
        switch (state) {
            case KeyState.WRONG:
                this.setWrong();
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