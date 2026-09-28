export function templateInicio() {
    return `
        <section id="sobre-ong">
            <h2>Sobre a ONG</h2>

            <img
                src="../imagens/logo.svg"
                alt="Projetos - ONG Esperança"
                width="240"
            >

            <p>
                A ONG Esperança atua na promoção de ações sociais,
                buscando contribuir para uma sociedade mais justa
                e solidária.
            </p>

            <p>
                Nosso trabalho é realizado por meio de projetos que
                beneficiam pessoas em situação de vulnerabilidade,
                contando com o apoio de voluntários e colaboradores.
            </p>
        </section>

        <section id="missao">
            <h2>Nossa missão</h2>

            <p>
                Promover iniciativas solidárias e incentivar a
                participação da comunidade na construção de um
                futuro melhor.
            </p>
        </section>

        <section id="contato">
            <h2>Contato</h2>

            <address>
                <p>
                    <strong>E-mail:</strong>
                    contato@ongesperanca.org
                </p>

                <p>
                    <strong>Telefone:</strong>
                    (88) 99999-9999
                </p>

                <p>
                    <strong>Endereço:</strong>
                    Rua da Solidariedade, 100 - Centro
                </p>
            </address>
        </section>
    `;
}


export function templateProjetos() {
    return `
        <section id="feedback">
            <h2>Informações</h2>

            <div class="alerta">
                <strong>Atenção:</strong>
                As doações e o trabalho voluntário são fundamentais
                para manter nossas ações sociais.
            </div>

            <div class="toast" id="toast">
                Informação consultada com sucesso!
            </div>
        </section>

        <section id="projetos">
            <h2>Nossos Projetos</h2>

            <p>
                Conheça as principais iniciativas da ONG Esperança
                e descubra como você pode contribuir para nossas ações.
            </p>

            <article id="acao-social">
                <span class="badge">Ação social</span>

                <h3>Ações Sociais</h3>

                <p>
                    Realizamos ações sociais para auxiliar pessoas
                    em situação de vulnerabilidade, promovendo
                    distribuição de alimentos, roupas e outros
                    itens essenciais.
                </p>

                <button
                    class="botao-modal"
                    type="button"
                    id="abrir-modal"
                >
                    Saiba mais
                </button>
            </article>
        </section>

        <section id="voluntariado">
            <h2>Voluntariado</h2>

            <p>
                O trabalho voluntário é fundamental para a realização
                dos nossos projetos. Você pode contribuir com seu
                tempo, conhecimento e habilidades.
            </p>

            <article id="como-participar">
                <span class="badge">Voluntariado</span>

                <h3>Como participar</h3>

                <ul>
                    <li>Participar das ações sociais;</li>
                    <li>Auxiliar na organização dos eventos;</li>
                    <li>Contribuir com suas habilidades profissionais;</li>
                    <li>Apoiar campanhas e atividades da ONG.</li>
                </ul>
            </article>
        </section>

        <section id="doacoes">
            <h2>Campanhas de Doação</h2>

            <p>
                As doações ajudam a manter nossos projetos e permitem
                que possamos ampliar o atendimento às comunidades.
            </p>

            <article id="como-doar">
                <span class="badge">Doação</span>

                <h3>Como contribuir</h3>

                <p>
                    Você pode contribuir financeiramente para apoiar
                    nossas campanhas e ajudar na aquisição de alimentos,
                    roupas e materiais necessários para as ações.
                </p>

                <ul>
                    <li>Doação de alimentos;</li>
                    <li>Doação de roupas e materiais;</li>
                    <li>Contribuição financeira;</li>
                    <li>Divulgação das campanhas.</li>
                </ul>
            </article>
        </section>

        <div id="modal" class="modal">
            <div class="modal-conteudo">

                <button
                    id="fechar-modal"
                    class="fechar-modal"
                    type="button"
                >
                    &times;
                </button>

                <h2>Sobre as Ações Sociais</h2>

                <p>
                    As ações sociais da ONG Esperança buscam atender
                    pessoas em situação de vulnerabilidade por meio
                    da distribuição de alimentos, roupas e outros
                    itens essenciais.
                </p>

                <button
                    id="confirmar-modal"
                    class="botao-modal"
                    type="button"
                >
                    Entendi
                </button>

            </div>
        </div>
    `;
}


export function templateCadastro() {
    return `
        <section id="cadastro">

            <h2>Cadastre-se como voluntário</h2>

            <p>
                Preencha o formulário abaixo para participar
                das ações da ONG Esperança.
            </p>

            <form id="formulario-cadastro" action="#" method="post">

                <fieldset id="dados-pessoais">
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        minlength="3"
                        required
                    >

                    <label for="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        maxlength="14"
                        required
                    >

                    <label for="nascimento">Data de nascimento</label>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >
                </fieldset>

                <fieldset id="dados-contato">
                    <legend>Dados de contato</legend>

                    <label for="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >

                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        maxlength="15"
                        required
                    >
                </fieldset>

                <fieldset id="endereco">
                    <legend>Endereço</legend>

                    <label for="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        pattern="[0-9]{5}-[0-9]{3}"
                        maxlength="9"
                        required
                    >

                    <label for="logradouro">Logradouro</label>
                    <input
                        type="text"
                        id="logradouro"
                        name="logradouro"
                        required
                    >

                    <label for="numero">Número</label>
                    <input
                        type="number"
                        id="numero"
                        name="numero"
                        min="1"
                        required
                    >

                    <label for="cidade">Cidade</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >

                    <label for="estado">Estado</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </fieldset>

                <fieldset id="voluntariado">
                    <legend>Área de interesse</legend>

                    <label>
                        <input
                            type="radio"
                            name="area"
                            value="eventos"
                            required
                        >
                        Eventos
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="area"
                            value="doacoes"
                        >
                        Doações
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="area"
                            value="comunicacao"
                        >
                        Comunicação
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="area"
                            value="outros"
                        >
                        Outros
                    </label>
                </fieldset>

                <fieldset id="confirmacao">
                    <legend>Confirmação</legend>

                    <label>
                        <input
                            type="checkbox"
                            id="termos"
                            name="termos"
                            required
                        >
                        Concordo com os termos de participação.
                    </label>

                    <button type="submit">
                        Enviar cadastro
                    </button>

                    <button type="reset">
                        Limpar
                    </button>
                </fieldset>

            </form>
        </section>
        <section id="cadastros-realizados">
            <h2>Cadastros realizados</h2>
            <div id="lista-cadastros"></div>
        </section>
    `;
}