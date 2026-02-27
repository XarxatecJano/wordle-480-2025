import { SEMICOLON } from "../env.js";
import { UtilCSS } from "../html_css/UtilCSS.js";
import { Util } from "../util.js";

export class BoardManager{

    setBoardKeyBackground(code: string){
        const keys: any = document.getElementsByClassName("key");
        let letter = ""
        for (let key of keys) {

            if(code == SEMICOLON){ letter = key.value }
            else{ letter = Util.transformCodeToLetter(key.value, "y") }

            if (letter == code){ UtilCSS.addClass(key, "keyPressed") }
        }
    }
    
    deleteBoardKeyBackground(code: string, letters: string[]){
        const keys: any = document.getElementsByClassName("key");
        let coincidences = 0
        for (let letter of letters) {
            if ( letter == code ){ coincidences++ }
        }

        for (let key of keys) {
            code = Util.semicolonCheck(code)
            if ( key.textContent == code && coincidences <= 1 ){ UtilCSS.removeClass(key, "keyPressed") }
        }
    }

    deleteBoardKeyFocus(){
        const keys: any = document.getElementsByClassName("key");
        for (let key of keys){
            UtilCSS.removeFocus(key)
        }
    }
}