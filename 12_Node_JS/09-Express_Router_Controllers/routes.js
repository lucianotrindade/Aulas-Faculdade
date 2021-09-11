// Usando rotas

const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//rotas da home
route.get('/', homeController.paginaInicial);
// Estou pegando a função que esta no controllers pagina inicial
route.post('/', homeController.trataPost);
// Estou pegando a função que esta no controllers trataPost

/*--------------------------------------------------------------------------------*/

//Rotas de contato
route.get('/contato' , contatoController.paginaInicial);
// Estou pegando a função que esta no controllers - paginaInicial


// Podemos criar mais Rotas conforme projeto. 
// EX.: SOBRE...



//Aqui exporto o modulo route
module.exports = route;


