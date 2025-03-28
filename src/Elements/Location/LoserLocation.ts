import { ILocation } from "../Interfaces/ILocation.js";

export class LoserLocation implements ILocation {

    assign(): void {
        location.assign("/loser");
    }
}