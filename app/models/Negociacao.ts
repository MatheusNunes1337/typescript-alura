export class Negociacao {
   
    constructor(private _data: Date, 
        private _quantidade: number, 
        private _valor: number) {
    }

    get Data() : Date {
        return this._data
    }

    get Quantidade() : number {
        return this._quantidade
    }

    get Valor() : number {
        return this._valor
    }

    get Volume(): number {
        return this._quantidade * this._valor
    }
}

