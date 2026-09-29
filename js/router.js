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

function atualizarNavegacao(rotaAtual) {
    const links = document.querySelectorAll("[data-rota]");

    links.forEach((link) => {
        if (link.dataset.rota === rotaAtual) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

export function renderizarRota(rota, moverFoco = false) {
    const rotaAtual = rotas[rota] ? rota : "inicio";
    const template = rotas[rotaAtual];

    conteudoPrincipal.innerHTML = template();

    atualizarNavegacao(rotaAtual);

    if (rotaAtual === "projetos") {
        configurarEventosProjetos();
    }

    if (rotaAtual === "cadastro") {
        configurarValidacaoCadastro();
    }

    if (moverFoco) {
        const tituloPagina = conteudoPrincipal.querySelector("h2");

        if (tituloPagina) {
            tituloPagina.setAttribute("tabindex", "-1");
            tituloPagina.focus();
        }
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

    renderizarRota(rota, true);
}


export function iniciarRouter() {
    document.addEventListener("click", navegar);

    window.addEventListener("popstate", () => {
        renderizarRota(obterRota(), true);
    });

    renderizarRota(obterRota());
}