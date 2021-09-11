const express = require('express');
const app = express();
const routes = require('./routes') // importando o que esta em routes

app.use(express.urlencoded({ extended: true }));
app.use(routes);


// Fazer o servidor ouvir o porta do servidor
// Estartar o servidor node server.js
// Ctrl C -> para o servidor
app.listen(3333, () => {
    console.log('Servidor inicializado!');
});