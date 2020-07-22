<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=150px src="https://raw.githubusercontent.com/myTapp/temos-vagas/master/logo_mytapp_primario.png?raw=true" alt="Project logo"></a>
</p>

<h3 align="center">MyTapp Tech Challenge</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Endpoints](#endpoints)
- [Back-end](#backend)
- [Front-end](#frontend)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Project created in order to demonstrate my skills as a fullstack programmer.

The project is based on taking information from an external api and using it in a frontend listing them.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## 🔧 Back-end <a name = "backend"></a>

### Prerequisites

What things you need to install the software and how to install them.

```
nodejs

postgres
```

### Installing

after cloned the repository enters the backend folder and runs:

```
npm install or yarn
```

And configure the .env file by composing the .env.example file that is at the root of the back-end folder with the data from your postgres database:

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

And after configured run:

```
npm run db:migrate or yarn db:migrate

npm run dev or yarn dev
```

Build run:

```
npm run db:migrate or yarn db:migrate

npm run build or yarn build

npm run start or yarn start
```

### Endpoints <a name = "endpoints"></a>

```
/api/users
  post route for create user
  get route for show the user
  put route for update the user

/api/sessions
  post route for create the session

/api/beers
  get route for show the one beer
  get route for show the all beer
```

### Insominia

<a href="https://insomnia.rest/run/?label=MyTapp%20Tech%20Challenge&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fguilhermeddc%2Ffull-stack-test%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

## 🚀 Front-end <a name = "frontend"></a>

### Prerequisites

What things you need to install the software and how to install them.

```
nodejs
```

### Installing

after cloned the repository enters the frontend folder and runs:

```
npm install or yarn

npm run start or yarn start
```

Build run:

```
npm run build or yarn build
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Postgres](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@guilhermeddc](https://github.com/guilhermeddc) - Idea & Initial work
