require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.emit('pronto');
})
.catch(e => console.log(e));


const routes = require('./routes'); // importando o que esta em routes
const path = require('path');// Trabalhando com caminho absoluto
const { dirname } = require('path');

app.use(express.urlencoded({ extended: true }));

//Adicionando o caminha da pasta public onde ficará os arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Para mexer no html
//Precisa intalar o ejs (npm i ejs)

app.use(routes);

app.on('pronto', () => {
    app.listen(3333, () => {
        console.log('Servidor inicializado!');
    });
});
// Fazer o servidor ouvir o porta do servidor
// Estartar o servidor node server.js
// Ctrl C -> para o servidor
