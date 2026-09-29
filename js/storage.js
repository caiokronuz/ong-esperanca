const CHAVE_CADASTROS = "ongEsperanca_cadastros";

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    try {
        localStorage.setItem(
            CHAVE_CADASTROS,
            JSON.stringify(cadastros)
        );
    } catch (erro) {
        console.error(
            "Não foi possível salvar o cadastro:",
            erro
        );

        return false;
    }

    return true;
}

export function obterCadastros() {
    const dados = localStorage.getItem(CHAVE_CADASTROS);

    if (!dados) {
        return [];
    }

    try {
        const cadastros = JSON.parse(dados);

        return Array.isArray(cadastros)
            ? cadastros
            : [];
    } catch (erro) {
        console.error(
            "Erro ao carregar os cadastros:",
            erro
        );

        return [];
    }
}