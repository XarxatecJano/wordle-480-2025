import { Interface } from "./Interface";

export interface ICheck {
    _interface: Interface;
    check: (actualWord:string, pickedWord:string, turn:number ) => void;
}