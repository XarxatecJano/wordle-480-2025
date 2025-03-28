import { ILocation } from "../Interfaces/ILocation.js";

export class WinnerLocation implements ILocation {

    assign(): void {
        location.assign("/winner")
    }
}