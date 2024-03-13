const express = require("express");
const app = express();

// Informando ao Express para usar o EJS como View Engine
app.set("view engine", "ejs");

app.get("/:nome/:lang",(require,answer) => {
    var nome = require.params.nome;
    var lang = require.params.lang;
    var msg = false;
    var listCompras = [
        {nome: "Leite", preco: 4},
        {nome: "Arroz", preco: 3.50},
        {nome: "Feijão", preco: 2.90},
        {nome: "Calabresa", preco: 8},
    ]
    answer.render("index",{
        nome: nome,
        lang: lang,
        company: "AulaEJS",
        subscribe: 1000,
        msg: msg,
        comp: listCompras
    });
});

app.listen(8080,()=> {console.log("App Rodando!");});