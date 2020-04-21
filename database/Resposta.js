const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define('respostas', {
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    resposta:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Resposta.sync({force: false});

module.exports = Resposta;