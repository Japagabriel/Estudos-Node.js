const express = require("express");
const app = express();


app.set("view engine", "ejs");       // Informando ao Express para usar o EJS como View Engine.
app.use(express.static("public"));  // Sempre que for usar arquivos estáticos no express, crie um arquivo padrão e chame de "public".


app.get("/",(require,answer) => {      //cria uma rota http para uma página no localhost
    answer.render("index");            //a página que será construída, está dentro do arquivo index.ejs que está dentro da pasta "view".
});

app.get("/perguntas", (require, answer) => {
    answer.render("questions");
});

app.listen(8080,()=> {console.log("App Rodando!");});