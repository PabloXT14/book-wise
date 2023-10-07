<h1 align="center">
  <img
    src=".github/assets/logo-book-wise.svg"
    title="Logo Book Wise"
    alt="Logo Book Wise"
    width="30px"
  />
  Book Wise
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/book-wise">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/book-wise">
  
  <a href="https://github.com/pabloxt14/book-wise/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/book-wise">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/book-wise/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/book-wise?style=social">
  </a>
</p>

<p>
  <img src=".github/assets/cover.png" alt="" />
</p>

<h4 align="center"> 
	🚀 Aplicação finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <a href="#-deploy">Deploy</a> |
 <a href="#-layout">Layout</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

O projeto **Book Wise** é uma plataforma de recomendações de livros para leitores, um lugar onde eles possam avaliar e ver avaliações de outros leitores sobre os mais diversos livros.

Vale ressaltar que este projeto foi desenvolvido como conclusão de um desafio proposto no curso/trilha **Ignite React** oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

---

## 🔗 Deploy

O deploy da aplicação pode ser acessada através da seguinte URL base: https://pabloxt14-book-wise.vercel.app/

---

## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/jTau6bMNSF10GkqwYAbuLA/BookWise/duplicate). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

Veja uma demonstração visual das principais telas da aplicação:

### Login

<p align="center">
  <img
    src=".github/assets/login-page.png"
    alt="Login Page Demonstration"
    title="Login Page Demonstration"
    width="100%"
  />
</p>

### Início

<p align="center">
  <img
    src=".github/assets/home-visitant-page.png"
    alt="Home Visitant Page Demonstration"
    title="Home Visitant Page Demonstration"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/home-logged-in-page.png"
    alt="Home Logged In Page Demonstration"
    title="Home Logged In Page Demonstration"
    width="100%"
  />
</p>

### Perfil

<p align="center">
  <img
    src=".github/assets/profile-logged-in-page.png"
    alt="Profile Logged In Page Demonstration"
    title="Profile Logged In Page Demonstration"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/profile-another-user-page.png"
    alt="Profile Another User Page Demonstration"
    title="Profile Another User Page Demonstration"
    width="100%"
  />
</p>

### Explorar

<p align="center">
  <img
    src=".github/assets/explore-home-page.png"
    alt="Explore Home Page Demonstration"
    title="Explore Home Page Demonstration"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/explore-detailed-book-page.png"
    alt="Explore Detailed Book Page Demonstration"
    title="Explore Detailed Book Page Demonstration"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/explore-book-rate-login-page.png"
    alt="Explore Book Rate Login Page Demonstration"
    title="Explore Book Rate Login Page Demonstration"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/explore-book-rate-comment-page-01.png"
    alt="Explore Book Rate Comment Page Demonstration 01"
    title="Explore Book Rate Comment Page Demonstration 01"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/explore-book-rate-comment-page-02.png"
    alt="Explore Book Rate Comment Page Demonstration 02"
    title="Explore Book Rate Comment Page Demonstration 02"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/explore-book-rate-comment-page-03.png"
    alt="Explore Book Rate Comment Page Demonstration 03"
    title="Explore Book Rate Comment Page Demonstration 03"
    width="100%"
  />
</p>

---

## 🚀 How it works

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
* Para o banco de dados ter o [PostgreSQL](https://www.postgresql.org/) ou [Docker](https://www.docker.com/) para baixar a imagem do banco.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Clonando e Executando

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/book-wise.git

# Acesse a pasta do projeto no terminal
$ cd book-wise

# Instale as dependências
$ npm install

# Crie uma arquivo .env e preencha conforme apresentado no arquivo .env.example

# Executar seu banco de dados

# Executar o seguinte comando para criar as migrations no banco
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará em alguma porta disponível que poderá ser acessada pelo navegador
```

---

## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[Next.js](https://nextjs.org/)**
- **[Stitches](https://stitches.dev/)**
- **[RadixUI](https://www.radix-ui.com/)**
- **[Prisma](https://www.prisma.io/)**
- **[Zod](https://zod.dev/)**
- **[Phosphor-Icons](https://phosphoricons.com/)**
- **[@tanstack/react-query](https://tanstack.com/query/latest)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Next-Auth](https://next-auth.js.org/)**
- **[Next-SEO](https://github.com/garmeeh/next-seo)**
- **[@uidotdev/usehooks](https://usehooks.com/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)

---

## ✍ Author

<img alt="Perfil Github" title="Perfil Github" src="https://github.com/PabloXT14.png" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Pablo_Alan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pabloalan/)](https://www.linkedin.com/in/pabloalan/)

[![Gmail Badge](https://img.shields.io/badge/-pabloxt14@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pabloxt14@gmail.com)](mailto:pabloxt14@gmail.com)

---

## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

Feito com 💜 por Pablo Alan 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pabloalan/)
