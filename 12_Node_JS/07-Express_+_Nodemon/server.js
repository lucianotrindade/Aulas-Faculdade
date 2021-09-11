const express = require('express');
const app = express();


//          criar    ler    atualizar apagar
// GRUD --> CREAT,   READ,  UPDATE,   DELETE
//          POST     GET    PUT       DELETE

app.get('/', (req, res) => {
    res.send('Ola mundodoooo   uuuuuu!'); //podemos colocar um html mas não é recomendavel
});

// Fazer o servidor ouvir o porta do servidor
// Estartar o servidor node server.js
// Ctrl C -> para o servidor
app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor inicializado!');
});

// Criando uma outra ROTA

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!');
});
