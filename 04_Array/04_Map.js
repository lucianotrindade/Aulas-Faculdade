/* Map = Cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida. 
    -- MAP = recebe uma callback(elemento, index, array);
*/

// Multiplica o valor.
const numeros = [1, 5, 2, 6, 9, 15, 20, 63, 54, 4, 8];
const multiplicar = numeros.map(multiplica => multiplica * 2);
//console.log(multiplicar);

// Retornando uma string com os nomes das pessoas.
const pessoas = [
    { nome: 'Maria', idade: 18 },
    { nome: 'Paulo', idade: 40 },
    { nome: 'Pedro', idade: 25 },
    { nome: 'Bianca', idade: 30 },
    { nome: 'Sandro', idade: 12 }
];

const RetornaNome = pessoas.map(obj => obj.nome);
//console.log(RetornaNome);


// Removendo a chave 'nome'.
const removeNome = pessoas.map(function (obj) {
    delete obj.nome;
    return obj;
});
console.log(removeNome);
