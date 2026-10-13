# 💜 Portfólio Pessoal — Lucca Campos Xavier 👨‍💻

> [!NOTE]
> Meu portfólio pessoal: um espaço para apresentar quem eu sou, os projetos que construí e minha trajetória como desenvolvedor backend.
> Navegação por páginas, tema escuro em preto e roxo e projetos organizados em cards filtráveis.


<p align="center"><img src="/src/assets/HomePage.png" alt="Capa do portfólio" width="700"></p>


---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/Status-Em_desenvolvimento-9266f7?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-007ec6?style=for-the-badge&logo=reactrouter&logoColor=white)
![Licença](https://img.shields.io/github/license/Lucca-Xavier/Portifolio?style=for-the-badge&color=9266f7)
![Último commit](https://img.shields.io/github/last-commit/Lucca-Xavier/Portifolio?style=for-the-badge&logo=clockify)
![Tamanho do repositório](https://img.shields.io/github/repo-size/Lucca-Xavier/Portifolio?style=for-the-badge&logo=files)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar](#-como-executar)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Deploy](#-deploy)
- [Como Personalizar](#-como-personalizar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Qualidade de Código](#-qualidade-de-código)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [Acesse o portfólio](https://lucca-xavier.vercel.app)
* 💻 **Repositório:** [github.com/Lucca-Xavier/Portifolio](https://github.com/Lucca-Xavier/Portifolio)
* 📄 **Currículo:** [Baixar PDF](./public/curriculo.pdf)

---

## 📝 Sobre o Projeto

Sou estudante de Engenharia de Software com foco em desenvolvimento backend e arquitetura de software. Como meu dia a dia acontece mais nos bastidores (APIs, bancos de dados e regras de negócio), criei este portfólio para dar visibilidade ao que eu construo e mostrar também que sei entregar uma interface cuidada.

- **Por que ele existe:** reunir em um só lugar meus projetos, experiências e formas de contato, em vez de depender apenas de um perfil em rede social ou de uma lista de repositórios.
- **Qual problema resolve:** facilita a vida de recrutadores e colegas que querem entender rapidamente o que eu faço, com quais tecnologias e em que estágio cada projeto está.
- **Contexto:** projeto pessoal e profissional, usado também como laboratório para praticar React, roteamento e organização de código front-end.
- **Onde pode ser utilizado:** como cartão de visitas em processos seletivos, no LinkedIn, no GitHub e em conversas com clientes.

> [!NOTE]
> O design segue uma linha mais editorial e menos "template": tema escuro em preto com roxo como cor de destaque, tipografia com personalidade e poucos efeitos.

---

## ✨ Funcionalidades Principais

- 🧭 **Navegação por páginas:** barra lateral fixa e troca de conteúdo via `<Outlet />` do React Router, sem recarregar a página.
- 🗂️ **Projetos em cards:** cada card mostra prévia, categoria, status (em andamento ou concluído), descrição e tecnologias.
- 🔎 **Filtro por categoria:** Websites, Landing Pages, Apps, E-commerce e Outros.
- 🔽 **Card expansível:** o botão "Ver detalhes" abre informações adicionais, destaques e links de código e demo.
- 🕒 **Linha do tempo de experiência:** trajetória profissional e acadêmica em ordem cronológica.
- 📱 **Layout responsivo:** a sidebar vira barra superior no celular, e o conteúdo é centralizado em telas ultrawide.
- ♿ **Acessibilidade básica:** navegação por teclado, foco visível, `aria-expanded` nos cards e respeito a `prefers-reduced-motion`.
- ✏️ **Conteúdo desacoplado:** projetos, skills e experiências ficam em arquivos de dados, sem mexer nos componentes.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

* **Biblioteca:** React 18
* **Roteamento:** React Router 6 (layout com `<Outlet />`)
* **Linguagem:** [TypeScript ou JavaScript ES6+]
* **Estilização:** CSS puro com variáveis (tokens de cor e tipografia)
* **Build Tool:** Vite

### ⚙️ Infraestrutura & DevOps

* **Hospedagem:** [Vercel / Netlify / GitHub Pages]
* **CI/CD:** [GitHub Actions, opcional]
* **Controle de versão:** Git e GitHub

> Este projeto é 100% front-end e estático: não há back-end nem banco de dados.

---

## 🏗 Arquitetura

O portfólio é uma **SPA (Single Page Application)** organizada em torno de um layout fixo e de páginas que entram nele conforme a rota.

- **Layout raiz (`Layout`):** renderiza a `Sidebar` e um `<Outlet />`, onde cada página é carregada.
- **Páginas (`pages/`):** Início, Sobre, Projetos, Experiência e Contato, uma por rota.
- **Componentes (`components/`):** peças reutilizáveis, como `Sidebar`, `ProjectCard`, `FilterPills` e `Timeline`.
- **Dados (`data/`):** projetos, skills e experiências em arquivos separados. Para atualizar o conteúdo, basta editar esses arquivos.
- **Estilos (`styles/`):** variáveis globais (`--bg`, `--accent` e outras) e estilos por componente.

**Fluxo:** a rota define a página → a página lê os dados de `data/` → os componentes renderizam a interface. O estado de filtro e de card aberto é local, sem biblioteca de estado global.

**Decisões e trade-offs:**
- Dados em arquivos locais em vez de uma API: simples e rápido, mas exige novo deploy para atualizar o conteúdo.
- CSS puro em vez de framework de estilos: mais controle visual e menos dependências, com mais código de estilo para manter.

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** versão LTS (v18 ou superior)
* **Gerenciador de pacotes:** npm (ou yarn/pnpm)
* **Git**

### 📦 Instalação de Dependências

```bash
git clone https://github.com/Lucca-Xavier/Portifolio
cd Portifolio
npm install
```

### ▶️ Como Executar

```bash
# Ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção (gera a pasta /dist)
npm run build

# Pré-visualizar o build localmente
npm run preview
```

### 🔑 Variáveis de Ambiente

Nenhuma variável é obrigatória para rodar o projeto.

Se você usar um formulário de contato com [EmailJS](https://www.emailjs.com/), crie um arquivo `.env.local` na raiz (variáveis no Vite precisam do prefixo `VITE_`):

| Variável | Descrição |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço de e-mail. |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template da mensagem. |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS. |

> [!WARNING]
> Nunca versione o arquivo `.env.local`. Mantenha um `.env.example` apenas com os nomes das variáveis.

---

## 🚀 Deploy

O site é estático, então qualquer provedor de hospedagem de front-end serve (Vercel, Netlify, GitHub Pages).

1. Conecte o repositório ao provedor.
2. Configure o comando de build como `npm run build` e a pasta de saída como `dist`.
3. Adicione as variáveis de ambiente, se houver.

> [!IMPORTANT]
> Como o portfólio usa rotas do React Router (`/projetos`, `/sobre`...), é preciso redirecionar todas as rotas para o `index.html`. Na Vercel, crie um `vercel.json` na raiz:
>
> ```json
> { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
> ```
>
> No Netlify, crie `public/_redirects` com `/* /index.html 200`. Se preferir evitar essa configuração, use `HashRouter` no lugar de `BrowserRouter`.

---

## ✏️ Como Personalizar

1. **Projetos:** edite `src/data/projects.js`. Cada projeto tem `name`, `category`, `status` (`progress` ou `done`), `image`, `desc`, `stack`, `details`, `highlights`, `repo` e `demo`. O valor de `category` deve ser igual a um dos filtros.
2. **Imagens dos projetos:** coloque os arquivos em `public/projetos/` e use o caminho em `image` (ex.: `/projetos/meu-projeto.png`).
3. **Skills e experiência:** edite `src/data/skills.js` e `src/data/experience.js`.
4. **Cor de destaque:** altere `--accent` em `src/styles/global.css`.
5. **Currículo:** substitua `public/curriculo.pdf`.

---

## 📂 Estrutura de Pastas

```
.
├── .gitignore                   # 🧹 Arquivos ignorados (node_modules, dist, .env.local).
├── .env.example                 # 🧩 Exemplo de variáveis (se houver).
├── README.md                    # 📘 Documentação principal.
├── LICENSE                      # ⚖️ Licença do projeto.
├── index.html                   # 🏠 Ponto de entrada do Vite.
├── vercel.json                  # 🔁 Redirecionamento das rotas da SPA.
├── package.json                 # 📦 Dependências e scripts.
│
├── /public                      # 📂 Arquivos estáticos
│   ├── curriculo.pdf            # 📄 Currículo para download.
│   └── /projetos                # 🖼️ Prévias dos projetos.
│
├── /docs                        # 📚 Prints e imagens usadas neste README.
│
└── /src                         # 📂 Código-fonte React
    ├── main.jsx                 # 🚀 Inicialização e configuração das rotas.
    ├── App.jsx                  # 🧭 Layout raiz (Sidebar + Outlet).
    ├── /pages                   # 📄 Início, Sobre, Projetos, Experiência, Contato.
    ├── /components              # 🧱 Sidebar, ProjectCard, FilterPills, Timeline.
    ├── /data                    # 🗃️ Projetos, skills e experiências.
    ├── /hooks                   # 🎣 Hooks personalizados (se houver).
    └── /styles                  # 🎨 Variáveis globais e estilos.
```

---

## 🎥 Demonstração

> Adicione prints ou GIFs em `assets` e referencie abaixo.

| Página Inicial | Projetos |
| :---: | :---: |
| <img src="/src/assets/HomePage.png" alt="Página inicial" width="380"> | <img src="/src/assets/Projetos.png" alt="Página de projetos" width="380"> |
| **Card expandido** | **Versão mobile** |
| <img src="/src/assets/CardExpandido.png" alt="Card de projeto expandido" width="380"> | <img src="/src/assets/Mobile.png" alt="Versão mobile" height="300"> |

---

## 🧪 Qualidade de Código

```bash
# Verificar o código com ESLint
npm run lint
```

*Ferramentas: ESLint e Prettier. Se for adicionar testes, [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) combinam bem com Vite e React.*

---

## 🔗 Documentações Utilizadas

* 📖 [React](https://react.dev/reference/react)
* 📖 [React Router](https://reactrouter.com/)
* 📖 [Vite](https://vitejs.dev/config/)
* 📖 [MDN Web Docs](https://developer.mozilla.org/pt-BR/) (CSS, acessibilidade e HTML)
* 📖 [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

---

## 👤 Autor

| 👤 Nome | :octocat: GitHub | 💼 LinkedIn | 📤 E-mail |
|---------|------------------|-------------|-----------|
| Lucca Xavier | [Lucca-Xavier](https://github.com/Lucca-Xavier) | [Lucca-Xavier](https://www.linkedin.com/in/lucca-xavier-bb0a462b2/) | [luccacxavier@gmail.com](mailto:luccacxavier@gmail.com) |

---


---

## 📄 Licença

Este projeto é distribuído sob a **Licença MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

> [!NOTE]
> O código é aberto, mas o conteúdo pessoal (textos, fotos e currículo) pertence ao autor. Se for usar como base para o seu portfólio, troque esse conteúdo pelo seu.
