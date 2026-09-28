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
    }

    function fechar() {
        modal.classList.remove("ativo");
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
}