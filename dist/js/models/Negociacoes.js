export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /*
        lista(): Readonly Negociacao[] { //mesma coisa que nas linhas acima
            return this.negociacoes
        }
        */
    }
    //private negociacoes: Negociacao[] = [] é a mesma coisa que a linha 4
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
