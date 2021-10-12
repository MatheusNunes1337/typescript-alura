import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []
    //private negociacoes: Negociacao[] = [] é a mesma coisa que a linha 4

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }

    /*
    lista(): Readonly Negociacao[] { //mesma coisa que nas linhas acima
        return this.negociacoes
    }
    */
}

const negociacoes = new Negociacoes()
