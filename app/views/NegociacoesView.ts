export class NegociacoesView {
    private elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(): string {
        return `
        <table class table="table table-hover table bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        
        `
    }
}