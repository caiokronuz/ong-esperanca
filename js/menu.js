export function configurarMenuMobile() {
    const botaoMenu = document.getElementById("botao-menu");
    const menu = document.getElementById("menu-navegacao");

    if (!botaoMenu || !menu) {
        return;
    }

    const iconeMenu = botaoMenu.querySelector("span");

    function abrirMenu() {
        menu.classList.add("ativo");
        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu de navegação");
        iconeMenu.textContent = "×";
    }

    function fecharMenu() {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
        iconeMenu.textContent = "☰";
    }

    function alternarMenu() {
        const menuAberto = botaoMenu.getAttribute("aria-expanded") === "true";

        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    }

    botaoMenu.addEventListener("click", alternarMenu);

    menu.addEventListener("click", (event) => {
        if (event.target.closest("[data-rota]")) {
            fecharMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            botaoMenu.getAttribute("aria-expanded") === "true"
        ) {
            fecharMenu();
            botaoMenu.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            fecharMenu();
        }
    });
}