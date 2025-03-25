import { IDOMAccess } from "./IDOMAccess.js";

export class DOMAccessImpl implements IDOMAccess {
    getELementById(id: string): HTMLElement | null {
        return document.getElementById(id)
    }
    getElementsByClassName(classname: string): HTMLCollectionOf<Element> {
        return document.getElementsByClassName(classname)
    }

}