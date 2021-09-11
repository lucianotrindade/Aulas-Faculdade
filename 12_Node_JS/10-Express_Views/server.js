const express = require('express');
const app = express();
const routes = require('./routes'); // importando o que esta em routes
const path = require('path');// Trabalhando com caminho absoluto

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Para mexer no html
//Precisa intalar o ejs (npm i ejs)

app.use(routes);


// Fazer o servidor ouvir o porta do servidor
// Estartar o servidor node server.js
// Ctrl C -> para o servidor
app.listen(3333, () => {
    console.log('Servidor inicializado!');
});