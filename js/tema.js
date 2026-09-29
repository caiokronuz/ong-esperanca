const CHAVE_TEMA = "ongEsperanca_tema";

export function configurarTema() {
    const botaoTema = document.getElementById("botao-tema");

    if (!botaoTema) {
        return;
    }

    const temaSalvo = localStorage.getItem(CHAVE_TEMA);

    const prefereEscuro = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const temaInicial =
        temaSalvo || (prefereEscuro ? "escuro" : "claro");

    aplicarTema(temaInicial, botaoTema);

    botaoTema.addEventListener("click", () => {
        const temaAtual =
            document.documentElement.dataset.tema;

        const novoTema =
            temaAtual === "escuro" ? "claro" : "escuro";

        aplicarTema(novoTema, botaoTema);

        localStorage.setItem(CHAVE_TEMA, novoTema);
    });
}

function aplicarTema(tema, botao) {
    document.documentElement.dataset.tema = tema;

    const modoEscuro = tema === "escuro";

    botao.setAttribute(
        "aria-pressed",
        String(modoEscuro)
    );

    botao.setAttribute(
        "aria-label",
        modoEscuro
            ? "Ativar modo claro"
            : "Ativar modo escuro"
    );

    const icone = botao.querySelector("span");

    if (icone) {
        icone.textContent = modoEscuro ? "☀️" : "🌙";
    }
}