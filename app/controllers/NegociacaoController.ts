import { DiaDaSemana } from "../enums/diasDaSemana.js"
import { Negociacao } from "../models/Negociacao.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { MensagemView } from "../views/mensagemView.js"
import { NegociacoesView } from "../views/NegociacoesView.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView', true)
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data')
        this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade")
        this.inputValor = <HTMLInputElement>document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona() : void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('São aceitas apenas negociações em dias úteis! Tente outro dia.')
            return
        } 
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
    }

    private limparFormulario() : void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView () : void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso')
    }
}