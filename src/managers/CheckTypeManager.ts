import { ICheckType } from "../interfaces/ICheckType";

export class CheckTypeManager{

    private _checks: ICheckType[]

    constructor(checks: ICheckType[]){
        this._checks = checks
    }

    executeChecks( word: number[] ){
        this.checks.forEach(element => { element.check( word ) });
    }

    set checks(value: ICheckType[]){this._checks = value}
    get checks(){ return this._checks }
}