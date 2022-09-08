export class GeradorStringAleatoria {

    stringAleatoria: string = '';
    readonly caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


    geraString(): string{
        for (let i = 0; i < 10; i++) {
            this.stringAleatoria += this.caracteres.charAt(Math.floor(Math.random() * this.caracteres.length));
        }
        return this.stringAleatoria;
    }

}
