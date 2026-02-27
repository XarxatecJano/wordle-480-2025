import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Interface } from "./Interface.js";
import { Palabra } from "./Palabra.js";
import { Teclado } from "./Teclado.js";
import { Letra } from "./Letra.js";
import { Turno } from "./Turno.js";
import { VerificadorPalabra } from "./VerificadorPalabra.js";
import { EstrategiaCorrecta } from "./EstrategiaCorrecta.js";
import { EstrategiaMalColocada } from "./EstrategiaMalColocada.js";
import { EstrategiaIncorrecta } from "./EstrategiaIncorrecta.js";

export class Game {
    private static instance: Game; 
    private _pickedWord: Palabra;
    private _actualWord: Palabra;
    private _turno: Turno;
    private _interface: Interface;
    private _teclado: Teclado;
    private _verificador: VerificadorPalabra;

    private constructor(pickedWord: Palabra) {  
        this._pickedWord = pickedWord;
        this._actualWord = new Palabra("");
        this._turno = new Turno();
        this._interface = new Interface();
        this._teclado = new Teclado();
        this._verificador = new VerificadorPalabra(this._pickedWord, this._interface);
        
    }

    public static getInstance(pickedWord: Palabra): Game {
        if (!Game.instance) {
            Game.instance = new Game(pickedWord);
        }
        return Game.instance;
    }
    iniciarJuego(): void {
        this._teclado.rellenarDiccionario(this._pickedWord);
        this._teclado.conteoLetras = {};
        console.log(this._teclado.ocurrenciasPalabra);
    }

    newKeyPressed(code: string): void {
        if(this._actualWord.letras.length < MAX_WORD_SIZE) {
            if (this._teclado.isValidLetter(code)) {
            let letter = new Letra(this._teclado.transformCodeToLetter(code));
            this._interface.setNewLetter(this._turno.getTurn(), this._turno.getPosition(), letter.valor);
            this._actualWord.letras.push(letter);
            this._turno.advancePosition();
            }
        }

        if (this._teclado.isEnterKey(code)) this.enterPressed();
        if (this._teclado.isBackspaceKey(code)) this.backspacePressed();
        if (this._turno.getPosition() <= MAX_WORD_SIZE) this._interface.changeBackgroundKey(code);
        
       
    }

    enterPressed(): void {
        if (this._actualWord.letras.length === MAX_WORD_SIZE) {
            this._verificador.setEstrategias([
                new EstrategiaCorrecta(this._interface, this._pickedWord),
                new EstrategiaMalColocada(this._interface, this._pickedWord),
                new EstrategiaIncorrecta(this._interface, this._pickedWord)
            ]);
            this._verificador.checkWord(this._actualWord, this._turno.getTurn(),this._teclado.ocurrenciasPalabra,this._teclado.conteoLetras);
            this._turno.nextTurn();
            this._teclado.agregarClavesUsadas(this._actualWord.toString());
            this._teclado.agregarLetrasAcertadas(this._actualWord,this._pickedWord);
            console.log(this._teclado.letrasAcertadas);
            this._teclado.acertadasEnVerde();
            this._interface.changeBackgroundKeyAfter(this._actualWord, this._teclado);
            this._actualWord = new Palabra(""); 
            this.iniciarJuego();
        }
    }

    backspacePressed(): void {
        if (this._turno.canDelete()) {
            this._interface.resetBackgroundKeys(this._actualWord.toString(),this._teclado);
            this._turno.decreasePosition();
            this._actualWord.letras.pop();
            this._interface.deleteLetter(this._turno.getTurn(), this._turno.getPosition());
        }
    }

}