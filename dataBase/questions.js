const sequelize = require("sequelize");
const connection = require("./dataBase");

const question = connection.define('question',{ // Define o modelo de tabela MySQL com o sequelize.
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{       // cria os campos dos atributos da tabela.
        type: sequelize.TEXT,    // Define os tipos da dos atributos.
        allowNull: false
    }
});

question.sync({force: false}/* se ouver a tabela, não força a criação */).then(() =>{}); // Sincroniza o modelo com o banco de dados

module.exports = question;