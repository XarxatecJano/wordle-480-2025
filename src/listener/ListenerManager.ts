import { IInput } from "../interfaces/IInput";

export class ListenerManager{
    
    _inputs: IInput[]

    constructor(inputs: IInput[]){
        this._inputs = inputs
    }
    
    setListeners(){
        Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
            this.inputs.forEach(element =>{
                element.OnPress((<HTMLButtonElement>e.target).value)
            })
        }));
        
        document.addEventListener("keydown", (e)=>{
            this.inputs.forEach(element => {
                element.OnPress(e.code);
            });
        });
    }

    get inputs(){return this._inputs}
    set inputs(value: IInput[]){this._inputs = value}
}