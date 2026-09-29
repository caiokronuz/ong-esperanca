# ONG Esperança

Aplicação web desenvolvida como projeto acadêmico da disciplina de Desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas da Universidade Cruzeiro do Sul.

O projeto consiste em uma Single Page Application (SPA) para a ONG Esperança, permitindo a apresentação da instituição, divulgação de projetos sociais e cadastro de voluntários.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Web Storage API (localStorage)
- Vite 8
- Oxc
- npm
- Git
- GitHub
- GitHub Pages

O projeto foi desenvolvido utilizando JavaScript puro, sem frameworks de interface ou bibliotecas externas.

O Vite é utilizado como ferramenta de desenvolvimento e build de produção, realizando o processamento dos módulos e recursos da aplicação. Na build de produção, a minificação do JavaScript é realizada com Oxc.

## Funcionalidades

A aplicação possui três áreas principais:

### Início

Apresenta informações institucionais sobre a ONG Esperança e suas atividades.

### Projetos

Exibe os projetos e ações sociais da instituição, incluindo interação através de modal e mensagens de feedback.

### Cadastro

Disponibiliza formulário para cadastro de voluntários, contendo:

- validação dos campos;
- validação de CPF;
- máscaras para CPF, telefone e CEP;
- validação de data;
- mensagens de erro;
- armazenamento dos cadastros no localStorage;
- exibição segura dos dados cadastrados.

### Modo escuro

A aplicação permite alternar entre os temas claro e escuro.

A preferência selecionada pelo usuário é armazenada no `localStorage`, sendo mantida entre os acessos. Caso nenhuma preferência tenha sido definida, a aplicação considera a configuração do sistema através de `prefers-color-scheme`.

As cores da interface são organizadas através de variáveis CSS, permitindo adaptar fundos, textos, superfícies, bordas, alertas e demais componentes ao tema selecionado.

## Arquitetura

O projeto utiliza uma arquitetura SPA (Single Page Application).

A navegação entre as páginas é realizada dinamicamente com JavaScript, sem recarregamento completo do documento. O código JavaScript foi dividido em módulos de acordo com suas responsabilidades.

Estrutura principal:

```text
/
├── index.html
├── css/
│   ├── cadastro.css
│   ├── index.css
│   └── projetos.css
├── public/
│   └── imagens/
│       └── logo.svg
├── js/
│   ├── app.js
│   ├── eventos.js
│   ├── menu.js
│   ├── router.js
│   ├── storage.js
│   ├── tema.js
│   ├── templates.js
│   └── validation.js
├── .gitignore
├── package.json
├── package-lock.json
└── vite.config.mjs
```

A pasta `dist` é gerada automaticamente durante a build de produção e não é versionada no repositório.

## Acessibilidade

Foram aplicadas práticas de acessibilidade com base nas recomendações da WCAG 2.1, incluindo:

- navegação por teclado;
- indicação da página atual com `aria-current`;
- gerenciamento de foco durante a navegação da SPA;
- modal com atributos ARIA;
- controle de foco dentro do modal;
- fechamento do modal pela tecla `Escape`;
- mensagens de feedback acessíveis;
- associação de mensagens auxiliares aos campos do formulário;
- indicadores visuais de foco;
- contraste adequado entre texto e fundo;
- suporte à preferência `prefers-reduced-motion`;
- suporte à preferência `prefers-color-scheme`;
- botão acessível para alternância entre os temas claro e escuro.

O modo escuro também utiliza variáveis específicas para manter a legibilidade e o contraste dos diferentes componentes da interface.

## Responsividade

A interface utiliza CSS responsivo para adaptação a diferentes tamanhos de tela.

Em dispositivos menores, a navegação principal é substituída por um menu mobile controlado por JavaScript e atributos ARIA.

## Validação e segurança

O formulário possui validações realizadas com JavaScript antes do armazenamento dos dados.

Entre as validações implementadas estão CPF, telefone, CEP, data de nascimento, nome e demais campos obrigatórios.

Os dados cadastrados são exibidos através de `textContent` e criação segura de elementos DOM, evitando que conteúdo informado pelo usuário seja interpretado diretamente como HTML.

O acesso aos dados armazenados no `localStorage` também possui tratamento para dados inválidos ou corrompidos.

## Build e otimizações

O projeto utiliza o Vite para gerar uma versão otimizada da aplicação para produção.

A build pode ser gerada através do comando:

```bash
npm run build
```

Os arquivos resultantes são armazenados na pasta `dist`.

Durante o processo de build, os módulos e recursos da aplicação são processados e os arquivos JavaScript e CSS são minificados. O Vite também gera arquivos de produção com hash em seus nomes, auxiliando no controle de cache.

A configuração de produção utiliza Oxc para minificação do JavaScript.

Durante a preparação da aplicação também foram realizadas otimizações como:

- remoção de páginas HTML obsoletas após adoção da SPA;
- remoção de recursos de imagem redundantes;
- utilização da logo em SVG;
- organização dos recursos estáticos através da pasta `public`;
- redução de listeners globais desnecessários;
- tratamento de erros relacionados ao armazenamento local;
- organização dos estilos por responsabilidade;
- utilização de variáveis CSS para gerenciamento dos temas;
- suporte à redução de movimento;
- geração de uma build otimizada e minificada para produção.

A build de produção pode ser testada localmente através do `vite preview` antes da publicação.

## Versionamento

O desenvolvimento utiliza Git e GitHub seguindo uma organização baseada em GitFlow.

Principais branches:

- `main`: versão estável da aplicação;
- `develop`: integração das funcionalidades;
- `feature/*`: desenvolvimento isolado de funcionalidades;
- `release/*`: preparação de versões para produção.

As funcionalidades são desenvolvidas em branches independentes e posteriormente integradas através de Pull Requests.

O projeto também utiliza Issues e Milestones do GitHub para acompanhar funcionalidades e melhorias. Entre as implementações realizadas através desse fluxo estão o modo escuro e a configuração da build de produção.

Os commits seguem uma organização baseada no padrão Conventional Commits, utilizando identificadores como `feat`, `build`, `perf`, `refactor` e `docs`.

As versões estáveis seguem o padrão de Versionamento Semântico (Semantic Versioning).

## Executando o projeto

É necessário possuir o Node.js e o npm instalados.

### 1. Clone o repositório

```bash
git clone git@github.com:caiokronuz/ong-esperanca.git
```

Entre na pasta do projeto:

```bash
cd ong-esperanca
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite iniciará um servidor local para execução da aplicação.

### 4. Gere a build de produção

```bash
npm run build
```

A versão otimizada será criada na pasta `dist`.

### 5. Teste a build de produção

```bash
npm run preview
```

Esse comando permite validar localmente a versão gerada para produção antes do deploy.

## Deploy

A aplicação é publicada utilizando o GitHub Pages como ambiente de produção.

A configuração do Vite utiliza o caminho base `/ong-esperanca/` para garantir o carregamento correto dos recursos quando a aplicação é publicada no GitHub Pages.

**Aplicação online:**  
https://caiokronuz.github.io/ong-esperanca/

## Autor

Caio Gabriel

Projeto acadêmico — Análise e Desenvolvimento de Sistemas  
Universidade Cruzeiro do Sul