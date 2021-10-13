export abstract class View<T> {
    protected element: HTMLElement
    private escapar = false

    /*os parâmetros opcionais tem de ser os últimos*/
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor)
        if(elemento) {
            this.element = <HTMLInputElement>elemento
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`)
        }
        if(escapar) {
            this.escapar = escapar
        }
    }

    public update(model: T) : void {
        let template = this.template(model)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.element.innerHTML = template
    }

    protected abstract template(model: T) : string 
       
}