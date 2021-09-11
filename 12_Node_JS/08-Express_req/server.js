const express = require('express');
const app = express();

// Pegando os dados do formulário.

app.use(express.urlencoded({ extended: true }));


//          criar    ler    atualizar apagar
// GRUD --> CREAT,   READ,  UPDATE,   DELETE
//          POST     GET    PUT       DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome cliente: <input type="text" name="nome"><br>
    Sobre Nome: <input type="text" name="sobreNome">
    <button>Enviar</button>
    </form>
    `); //podemos colocar um html mas não é recomendavel
});

//Criando um metodo POST para receber a informação.
//Pegando o valor com req.body.nome
app.post('/', (req, res) => {
    res.send(`Nome: ${req.body.nome} SobreNome: ${req.body.sobreNome}`);
});

// Criando uma outra ROTA

//app.get('/contato', (req, res) => {
//  res.send('Obrigado por entrar em contato!');
//});



// Fazer o servidor ouvir o porta do servidor
// Estartar o servidor node server.js
// Ctrl C -> para o servidor
app.listen(3333, () => {
    console.log('Servidor inicializado!');
});