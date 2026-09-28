import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import {
    configurarEventosProjetos
} from "./eventos.js";

import {
    configurarValidacaoCadastro
} from "./validation.js";

const rotas = {
    inicio: templateInicio,
    projetos: templateProjetos,
    cadastro: templateCadastro
};


const conteudoPrincipal = document.getElementById(
    "conteudo-principal"
);


function obterRota() {
    const parametros = new URLSearchParams(
        window.location.search
    );

    return parametros.get("pagina") || "inicio";
}


export function renderizarRota(rota) {
    const template = rotas[rota] || templateInicio;

    conteudoPrincipal.innerHTML = template();

    if (rota === "projetos") {
        configurarEventosProjetos();
    }

    if (rota === "cadastro"){
        configurarValidacaoCadastro();
    }

}


function navegar(event) {
    const link = event.target.closest("[data-rota]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const rota = link.dataset.rota;

    const url = rota === "inicio"
        ? "index.html"
        : `index.html?pagina=${rota}`;

    history.pushState({}, "", url);

    renderizarRota(rota);
}


export function iniciarRouter() {
    document.addEventListener("click", navegar);

    window.addEventListener("popstate", () => {
        renderizarRota(obterRota());
    });

    renderizarRota(obterRota());
}