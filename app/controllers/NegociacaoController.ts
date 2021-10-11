import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.log('negociações', this.negociacoes.lista())
        this.negociacoesView.update(this.negociacoes)
        this.limparFormulario()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        const negociacao = new Negociacao(
            date, valor, quantidade
        )

        return negociacao
    }

    limparFormulario() : void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}