import { salvarCadastro, obterCadastros } from "./storage.js";

export function configurarValidacaoCadastro() {
    const formulario = document.getElementById("formulario-cadastro");

    if (!formulario) {
        return;
    }

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    configurarMascaras(cpf, telefone, cep);
    configurarValidacaoEmTempoReal(formulario);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        limparMensagemSucesso();

        const formularioValido = validarFormulario(formulario);

        if (!formularioValido) {
            const primeiroInvalido = formulario.querySelector(
                '[aria-invalid="true"]'
            );

            if (primeiroInvalido) {
                primeiroInvalido.focus();
            }

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
        limparErros(formulario);

        renderizarCadastros();
    });

    renderizarCadastros();
}

function validarFormulario(formulario) {
    let valido = true;

    const campos = formulario.querySelectorAll(
        "input:not([type='radio']):not([type='checkbox']), select"
    );

    campos.forEach((campo) => {
        if (!validarCampo(campo)) {
            valido = false;
        }
    });

    if (!validarArea(formulario)) {
        valido = false;
    }

    if (!validarTermos()) {
        valido = false;
    }

    return valido;
}

function validarCampo(campo) {
    const valor = campo.value.trim();

    removerErro(campo);

    if (campo.required && valor === "") {
        mostrarErro(campo, "Este campo é obrigatório.");
        return false;
    }

    if (campo.id === "nome") {
        return validarNome(campo);
    }

    if (campo.id === "cpf") {
        return validarCampoCPF(campo);
    }

    if (campo.id === "nascimento") {
        return validarNascimento(campo);
    }

    if (campo.id === "email") {
        return validarEmail(campo);
    }

    if (campo.id === "telefone") {
        return validarTelefone(campo);
    }

    if (campo.id === "cep") {
        return validarCEP(campo);
    }

    if (campo.id === "logradouro") {
        return validarTexto(campo, "Informe um logradouro válido.");
    }

    if (campo.id === "numero") {
        return validarNumero(campo);
    }

    if (campo.id === "cidade") {
        return validarTexto(campo, "Informe uma cidade válida.");
    }

    if (campo.id === "estado") {
        if (campo.value === "") {
            mostrarErro(campo, "Selecione um estado.");
            return false;
        }
    }

    if (!campo.checkValidity()) {
        mostrarErro(campo, "Verifique o valor informado.");
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarNome(campo) {
    const nome = campo.value.trim();
    const partes = nome.split(/\s+/).filter(Boolean);

    if (nome.length < 3) {
        mostrarErro(
            campo,
            "O nome deve possuir pelo menos 3 caracteres."
        );
        return false;
    }

    if (partes.length < 2) {
        mostrarErro(
            campo,
            "Informe o nome e o sobrenome."
        );
        return false;
    }

    const formatoValido = /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ'’-]+)+$/;

    if (!formatoValido.test(nome)) {
        mostrarErro(
            campo,
            "Informe um nome válido, utilizando apenas letras."
        );
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarCampoCPF(campo) {
    const cpf = campo.value.replace(/\D/g, "");

    if (cpf.length !== 11) {
        mostrarErro(campo, "Informe um CPF com 11 dígitos.");
        return false;
    }

    if (!validarCPF(cpf)) {
        mostrarErro(campo, "Informe um CPF válido.");
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarCPF(cpf) {
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;

    if (primeiroDigito === 10) {
        primeiroDigito = 0;
    }

    if (primeiroDigito !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;

    if (segundoDigito === 10) {
        segundoDigito = 0;
    }

    return segundoDigito === Number(cpf[10]);
}

function validarNascimento(campo) {
    if (!campo.value) {
        mostrarErro(campo, "Informe a data de nascimento.");
        return false;
    }

    const nascimento = new Date(`${campo.value}T00:00:00`);
    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);

    if (Number.isNaN(nascimento.getTime())) {
        mostrarErro(campo, "Informe uma data válida.");
        return false;
    }

    if (nascimento > hoje) {
        mostrarErro(
            campo,
            "A data de nascimento não pode estar no futuro."
        );

        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarEmail(campo) {
    if (!campo.checkValidity()) {
        mostrarErro(campo, "Informe um endereço de e-mail válido.");
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarTelefone(campo) {
    const telefone = campo.value.replace(/\D/g, "");

    if (telefone.length !== 11) {
        mostrarErro(
            campo,
            "Informe um telefone com DDD e 9 dígitos."
        );

        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarCEP(campo) {
    const cep = campo.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        mostrarErro(campo, "Informe um CEP com 8 dígitos.");
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarTexto(campo, mensagem) {
    const valor = campo.value.trim();

    if (valor.length < 2) {
        mostrarErro(campo, mensagem);
        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarNumero(campo) {
    const numero = Number(campo.value);

    if (
        !Number.isInteger(numero) ||
        numero <= 0
    ) {
        mostrarErro(
            campo,
            "Informe um número inteiro maior que zero."
        );

        return false;
    }

    marcarComoValido(campo);
    return true;
}

function validarArea(formulario) {
    const radios = formulario.querySelectorAll(
        'input[name="area"]'
    );

    const selecionado = formulario.querySelector(
        'input[name="area"]:checked'
    );

    const primeiroRadio = radios[0];

    if (!selecionado) {
        mostrarErro(
            primeiroRadio,
            "Selecione uma área de interesse."
        );

        return false;
    }

    radios.forEach((radio) => removerErro(radio));

    return true;
}

function validarTermos() {
    const termos = document.getElementById("termos");

    if (!termos.checked) {
        mostrarErro(
            termos,
            "Você precisa concordar com os termos de participação."
        );

        return false;
    }

    removerErro(termos);
    return true;
}

function mostrarErro(campo, mensagem) {
    removerErro(campo);

    const idErro = `erro-${campo.id || campo.name}`;

    const erro = document.createElement("p");

    erro.id = idErro;
    erro.className = "mensagem-erro";
    erro.textContent = mensagem;
    erro.setAttribute("role", "alert");

    campo.setAttribute("aria-invalid", "true");

    const descricaoOriginal =
        campo.getAttribute("aria-describedby");

    if (descricaoOriginal) {
        const ids = descricaoOriginal
            .split(/\s+/)
            .filter((id) => id !== idErro);

        ids.push(idErro);

        campo.setAttribute(
            "aria-describedby",
            ids.join(" ")
        );
    } else {
        campo.setAttribute("aria-describedby", idErro);
    }

    if (campo.type === "radio") {
        const fieldset = campo.closest("fieldset");
        fieldset.appendChild(erro);
    } else {
        campo.insertAdjacentElement("afterend", erro);
    }
}

function removerErro(campo) {
    const idErro = `erro-${campo.id || campo.name}`;
    const erro = document.getElementById(idErro);

    if (erro) {
        erro.remove();
    }

    campo.removeAttribute("aria-invalid");

    const descricao = campo.getAttribute("aria-describedby");

    if (descricao) {
        const ids = descricao
            .split(/\s+/)
            .filter((id) => id !== idErro);

        if (ids.length > 0) {
            campo.setAttribute(
                "aria-describedby",
                ids.join(" ")
            );
        } else {
            campo.removeAttribute("aria-describedby");
        }
    }
}

function marcarComoValido(campo) {
    removerErro(campo);
    campo.setAttribute("aria-invalid", "false");
}

function limparErros(formulario) {
    formulario
        .querySelectorAll(".mensagem-erro")
        .forEach((erro) => erro.remove());

    formulario
        .querySelectorAll("[aria-invalid]")
        .forEach((campo) => {
            campo.removeAttribute("aria-invalid");
        });
}

function configurarValidacaoEmTempoReal(formulario) {
    formulario.addEventListener("focusout", (event) => {
        const campo = event.target;

        if (
            campo.matches(
                "input:not([type='radio']):not([type='checkbox']), select"
            )
        ) {
            validarCampo(campo);
        }
    });

    formulario.addEventListener("change", (event) => {
        const campo = event.target;

        if (campo.name === "area") {
            validarArea(formulario);
        }

        if (campo.id === "termos") {
            validarTermos();
        }
    });
}

function configurarMascaras(cpf, telefone, cep) {
    if (cpf) {
        cpf.addEventListener("input", () => {
            cpf.value = aplicarMascaraCPF(cpf.value);
        });
    }

    if (telefone) {
        telefone.addEventListener("input", () => {
            telefone.value = aplicarMascaraTelefone(
                telefone.value
            );
        });
    }

    if (cep) {
        cep.addEventListener("input", () => {
            cep.value = aplicarMascaraCEP(cep.value);
        });
    }
}

function aplicarMascaraCPF(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function aplicarMascaraTelefone(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function aplicarMascaraCEP(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function mostrarMensagem(formulario, mensagem) {
    let feedback = document.getElementById(
        "feedback-cadastro"
    );

    if (!feedback) {
        feedback = document.createElement("p");
        feedback.id = "feedback-cadastro";
        feedback.setAttribute("role", "status");
        feedback.setAttribute("aria-live", "polite");

        formulario.prepend(feedback);
    }

    feedback.textContent = mensagem;
    feedback.className = "feedback-sucesso";
}

function limparMensagemSucesso() {
    const feedback = document.getElementById(
        "feedback-cadastro"
    );

    if (feedback) {
        feedback.remove();
    }
}

function renderizarCadastros() {
    const lista = document.getElementById(
        "lista-cadastros"
    );

    if (!lista) {
        return;
    }

    lista.replaceChildren();

    const cadastros = obterCadastros();

    if (cadastros.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhum cadastro realizado.";
        lista.appendChild(mensagem);
        return;
    }

    cadastros.forEach((cadastro) => {
        const artigo = document.createElement("article");
        artigo.className = "card-cadastro";

        const titulo = document.createElement("h3");
        titulo.textContent = cadastro.nome;

        artigo.appendChild(titulo);

        adicionarInformacao(
            artigo,
            "E-mail:",
            cadastro.email
        );

        adicionarInformacao(
            artigo,
            "Telefone:",
            cadastro.telefone
        );

        adicionarInformacao(
            artigo,
            "Cidade:",
            cadastro.cidade
        );

        adicionarInformacao(
            artigo,
            "Estado:",
            cadastro.estado
        );

        adicionarInformacao(
            artigo,
            "Área de interesse:",
            cadastro.area
        );

        lista.appendChild(artigo);
    });
}

function adicionarInformacao(elemento, titulo, valor) {
    const paragrafo = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = `${titulo} `;

    paragrafo.appendChild(strong);
    paragrafo.appendChild(
        document.createTextNode(valor || "")
    );

    elemento.appendChild(paragrafo);
}