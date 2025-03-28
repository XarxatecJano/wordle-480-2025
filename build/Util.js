export class Util {
    static transformCodeToLetter(code, split) {
        let letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split(split)[1];
        return letter;
    }
    static toCharArray(str) {
        return str.split('');
    }
    static getElementsByClassName(className) {
        return document.getElementsByClassName(className);
    }
}
