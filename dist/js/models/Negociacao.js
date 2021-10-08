export class Negociacao {
    #data
    #quantidade
    #valor

    constructor(data, quantidade, valor) {
        this.#data = data
        this.#quantidade = quantidade
        this.#valor = valor
    }

    get Data() {
        return this.#data
    }

    get Quantidade() {
        return this.#quantidade
    }

    get Valor() {
        return this.#valor
    }

    get Volume() {
        return this.#quantidade * this.#valor
    }
}

