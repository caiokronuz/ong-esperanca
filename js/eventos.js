export function configurarEventosProjetos() {
    const modal = document.getElementById("modal");
    const abrirModal = document.getElementById("abrir-modal");
    const fecharModal = document.getElementById("fechar-modal");
    const confirmarModal = document.getElementById("confirmar-modal");
    const toast = document.getElementById("toast");

    if (!modal) {
        return;
    }

    function abrir() {
        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");

        // Move o foco para o primeiro controle do modal
        fecharModal.focus();
    }

    function fechar() {
        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");

        // Devolve o foco ao elemento que abriu o modal
        abrirModal.focus();
    }

    function mostrarToast() {
        toast.classList.add("ativo");

        setTimeout(() => {
            toast.classList.remove("ativo");
        }, 3000);
    }

    abrirModal.addEventListener("click", abrir);

    fecharModal.addEventListener("click", () => {
        fechar();
        mostrarToast();
    });

    confirmarModal.addEventListener("click", () => {
        fechar();
        mostrarToast();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            fechar();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("ativo")) {
            return;
        }

        if (event.key === "Escape") {
            fechar();
            return;
        }

        if (event.key === "Tab") {
            const elementosFocaveis = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            const primeiroElemento = elementosFocaveis[0];
            const ultimoElemento = elementosFocaveis[elementosFocaveis.length - 1];

            if (event.shiftKey && document.activeElement === primeiroElemento) {
                event.preventDefault();
                ultimoElemento.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === ultimoElemento
            ) {
                event.preventDefault();
                primeiroElemento.focus();
            }
        }
    });
}