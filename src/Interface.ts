
import { Palabra } from "./Palabra.js";
import { Teclado } from "./Teclado.js";

export class Interface {
    setNewLetter(turn: number, position: number, letter: string) {
        const row = document.getElementById(`row_${turn}`);
        if (row) {
            (row.children[position] as HTMLElement).textContent = letter;
        }
    }

    deleteLetter(turn: number, position: number) {
        const row = document.getElementById(`row_${turn}`);
        if (row) {
            (row.children[position] as HTMLElement).textContent = "";
        }
    }

    changeBackgroundPosition(turn: number, position: number, state: string) {
        let positionClass = "cell-grey";
        if (state === "correcta") positionClass = "cell-green";
        if (state === "mal_colocada") positionClass = "cell-orange";

        const row = document.getElementById(`row_${turn}`);
        if (row) {
            (row.children[position] as HTMLElement).classList.add(positionClass);
        }
    }

    changeBackgroundKey(code: string) {

        const keys: any = document.getElementsByClassName("key");

        for (let key of keys) {

            if (key.value == code && code !== "Enter" && code !== "Backspace") {

                key.classList.add("keyPressed");

            }

        }

    }


    resetBackgroundKeys(word: string, teclado: Teclado) {
        const lastLetter = word[word.length - 1];
        const oldWord = word.slice(0, word.length - 1);
    
        if (!oldWord.includes(lastLetter)) {
            const keys: any = document.getElementsByClassName("keyPressed");
    
            for (let key of keys) {
                const letraTecla = teclado.transformCodeToLetter(key.value); 
    
                if (!teclado.clavesUsadas.includes(letraTecla) && key.value == "Key"+lastLetter ) { 
                    key.classList.remove("keyPressed");
                }
            }
        }
    }
   
    changeBackgroundKeyAfter(code: Palabra, teclado: Teclado) {
        const keys: any = document.getElementsByClassName("key");
    
       
        for (let i = 0; i < code.letras.length; i++) {  
            const letra = code.letras[i]; 
            const estado = letra.estado;  
    
            
            for (let key of keys) {
                if (key.value === "Key" + letra.valor) {  
                key.classList.remove("keyPressed","cell-orange");
    
                if(!teclado.letrasAcertadas.includes(letra.valor)) {
                    if (estado === "mal_colocada") {
                        key.classList.add("cell-orange");
                    } else {
                        key.classList.add("keyPressed");
                    }
                }
              
            
                    
                }
            }
        }
    }
    
    
    
    
    
}
