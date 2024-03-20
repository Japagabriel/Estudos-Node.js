const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const connection = require('./dataBase/dataBase');
const questionModel = require("./dataBase/questions"); // Importa o modelo de tabela perguntas.

// DATABASE

connection.authenticate().then(() => {
    console.log('Conexão com o Banco de Dados feita com Sucesso!')
}).catch((msgErro) => {
    console.log('Erro no Banco de Dados! Tipo do Erro: ');
    console.log(msgErro);
});


app.set("view engine", "ejs");       // Informando ao Express para usar o EJS como View Engine.
app.use(express.static("public"));  // Sempre que for usar arquivos estáticos no express, crie um arquivo padrão e chame de "public".

// BODY PARSER
app.use(bodyParser.urlencoded({extended: false})); // Irá decodificar os dados enviados pelos formulários.
app.use(bodyParser.json()); //Torna possível a leitura desses dados através de um arquivo json.

// ROTAS 
app.get("/",(req,res) => {      //cria uma rota http
    questionModel.findAll({raw: true, order:[    // o Raw trás informações minimizadas do BD e o order ordena a lista de perguntas da tabela.
        ["id","desc"]   // primeiras "" informa porqual coluna irá ordenar, o segundo "" informa se será crescente (ASC) ou decrecente (DESC).
    ]} ) .then(Allquestions => { // lista todas as perguntas e salva na variável Allquestions.  
        res.render("index", { //a página que será construída, está dentro do arquivo index.ejs que está dentro da pasta "view".
            Allquestions: Allquestions
        });            

    }); 
});

app.get("/questions", (require, res) => {
    res.render("questions");
});

app.post("/saveQuestions", (req, res) => {  // Criando rota do tipo post para receber as informações do formulário de perguntas.
    var title = req.body.title;
    var description= req.body.description;
    questionModel.create({
        title: title,
        description: description
    }).then(()=>{
        res.redirect("/");
    });
});

app.get("/questions/:id", (req,res) => {
    var id = req.params.id;
    questionModel.findOne({  //busca um dado específico no BD.
        where:{ide: id}
    }).then(foundQuestion => {
        if(foundQuestion != undefined){ //found value

        }else{                         //not found

        }
    })
});

app.listen(8080,()=> {console.log("App Rodando!");});
