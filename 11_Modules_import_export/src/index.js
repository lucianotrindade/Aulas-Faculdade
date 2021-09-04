import { idade, nome as nome2, Pessoa, sobrenome, soma } from './modulo1';
const nome = 'João';
//console.log(nome2, sobrenome, idade);
//console.log(soma(5,5));

const pessoa1 = new Pessoa(nome, sobrenome);
console.log(pessoa1);
console.log(pessoa1.nome);

/*Podemos importar todo o outro modulo 
import * Meumodulo from './modulo1';

Isso faz o import de tudo que estiver com o export.
*/