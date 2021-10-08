import { Negociacao } from './models/Negociacao.js'

const negociacao = new Negociacao(new Date(), 10, 1000)
console.log(negociacao)
negociacao.quantidade = 50000
console.log(negociacao)