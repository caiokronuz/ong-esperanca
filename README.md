# ONG Esperança

Aplicação web desenvolvida como projeto acadêmico da disciplina de Desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas da Universidade Cruzeiro do Sul.

O projeto consiste em uma Single Page Application (SPA) para a ONG Esperança, permitindo a apresentação da instituição, divulgação de projetos sociais e cadastro de voluntários.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Web Storage API (localStorage)
- Git
- GitHub
- GitHub Pages

O projeto foi desenvolvido utilizando JavaScript puro, sem frameworks ou bibliotecas externas.

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

## Arquitetura

O projeto utiliza uma arquitetura SPA (Single Page Application).

A navegação entre as páginas é realizada dinamicamente com JavaScript, sem recarregamento completo do documento.

Estrutura principal:

```text
/
├── index.html
├── css/
│   ├── cadastro.css
│   ├── index.css
│   └── projetos.css
├── imagens/
│   └── logo.svg
└── js/
    ├── app.js
    ├── eventos.js
    ├── menu.js
    ├── router.js
    ├── storage.js
    ├── templates.js
    └── validation.js
```

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
- contraste adequado;
- suporte à preferência `prefers-reduced-motion`.

## Responsividade

A interface utiliza CSS responsivo para adaptação a diferentes tamanhos de tela.

Em dispositivos menores, a navegação principal é substituída por um menu mobile controlado por JavaScript e atributos ARIA.

## Validação e segurança

O formulário possui validações realizadas com JavaScript antes do armazenamento dos dados.

Os dados cadastrados são exibidos através de `textContent` e criação segura de elementos DOM, evitando que conteúdo informado pelo usuário seja interpretado diretamente como HTML.

O acesso aos dados armazenados no `localStorage` também possui tratamento para dados inválidos ou corrompidos.

## Otimizações

Durante a preparação para produção foram realizadas otimizações como:

- remoção de páginas HTML obsoletas após adoção da SPA;
- remoção de recursos de imagem redundantes;
- utilização da logo em SVG;
- redução de listeners globais desnecessários;
- tratamento de erros relacionados ao armazenamento local;
- organização dos estilos por responsabilidade;
- suporte à redução de movimento.

## Versionamento

O desenvolvimento utiliza Git e GitHub seguindo uma organização baseada em GitFlow.

Principais branches:

- `main`: versão estável da aplicação;
- `develop`: integração das funcionalidades;
- `feature/*`: desenvolvimento isolado de funcionalidades;
- `release/*`: preparação de versões para produção.

As funcionalidades foram desenvolvidas em branches independentes e posteriormente integradas através de Pull Requests.

## Executando o projeto

Por utilizar módulos JavaScript, recomenda-se executar o projeto através de um servidor HTTP local.

Por exemplo, utilizando a extensão Live Server no Visual Studio Code:

1. Clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o `index.html` utilizando o Live Server.

## Deploy

A aplicação foi publicada utilizando o GitHub Pages como ambiente de produção.

**Aplicação online:** https://caiokronuz.github.io/ong-esperanca/

## Autor

Caio Gabriel

Projeto acadêmico — Análise e Desenvolvimento de Sistemas  
Universidade Cruzeiro do Sul