export class UtilCSS{

    static addClass( key: any, className: string ){
        key.classList.add(className)
    }

    static removeClass( key: any, className: string  ){
        key.classList.remove(className);
    }

    static removeFocus( key: any ){
        key.blur()
    }

}