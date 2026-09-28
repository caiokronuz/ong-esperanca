const CHAVE_CADASTROS = "ongEsperanca_cadastros";


export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    localStorage.setItem(
        CHAVE_CADASTROS,
        JSON.stringify(cadastros)
    );
}


export function obterCadastros() {
    const dados = localStorage.getItem(
        CHAVE_CADASTROS
    );

    return dados ? JSON.parse(dados) : [];
}