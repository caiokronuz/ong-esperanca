import { salvarCadastro, obterCadastros } from "./storage.js";


export function configurarValidacaoCadastro() {
    const formulario = document.getElementById(
        "formulario-cadastro"
    );

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = new FormData(formulario);

        const cadastro = Object.fromEntries(dados.entries());

        salvarCadastro(cadastro);

        mostrarMensagem(
            formulario,
            "Cadastro realizado com sucesso!"
        );

        formulario.reset();
    });

    renderizarCadastros();
}


function mostrarMensagem(formulario, mensagem) {
    let feedback = document.getElementById(
        "feedback-cadastro"
    );

    if (!feedback) {
        feedback = document.createElement("p");
        feedback.id = "feedback-cadastro";

        formulario.prepend(feedback);
    }

    feedback.textContent = mensagem;
    feedback.className = "feedback-sucesso";
}

function renderizarCadastros() {
    const lista = document.getElementById("lista-cadastros");

    if (!lista) {
        return;
    }

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        lista.innerHTML = "<p>Nenhum cadastro realizado.</p>";
        return;
    }

    lista.innerHTML = cadastros.map((cadastro) => `
        <article class="card-cadastro">
            <h3>${cadastro.nome}</h3>
            <p><strong>E-mail:</strong> ${cadastro.email}</p>
            <p><strong>Telefone:</strong> ${cadastro.telefone}</p>
            <p><strong>Cidade:</strong> ${cadastro.cidade}</p>
            <p><strong>Estado:</strong> ${cadastro.estado}</p>
            <p><strong>Área de interesse:</strong> ${cadastro.area}</p>
        </article>
    `).join("");
}