export class Util {

    static transformCodeToLetter(code: string, split: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split(split)[1];
        return letter;
    }

    static toCharArray(str: string): string[] {
        return str.split('')
    }

    static getElementsByClassName(className: string) {
        return document.getElementsByClassName(className);
    }
}