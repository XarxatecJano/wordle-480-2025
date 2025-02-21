export interface ICheck {
    check: (actualWord:string, pickedWord:string, turn:number ) => void;
}