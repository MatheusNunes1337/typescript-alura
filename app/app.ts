import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { NegociacoesView } from "./views/NegociacoesView.js";

const controller = new NegociacaoController()
const form = document.querySelector('.form')
if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault()
        controller.adiciona()
    })
} else {
    throw new Error('Não foi possível iniciar a aplicação')
}

