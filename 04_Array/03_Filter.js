//Filter = CRIA UMA MATRIZ COM TODOS OS ELEMENTOS QUE PASSAM NO TESTE IMPLEMENTADO PELA FUNÇÃO FORNECIDA.


//Retornar valores maior que 10
const numeros = [0, 15, 5, 11, 10, 20, 4, 7, 1, 9, 8];

const maiorQue10 = numeros.filter(valor => valor > 10); //Função de Callback
console.log(maiorQue10);


//Retornando a pessoa que a idade é igual a 4anos.

const pessoas = [
    { nome: 'Luciano', idade: 39 },
    { nome: 'Samuel', idade: 4 },
    { nome: 'Suellen', idade: 39 },
];

const PessoasComIdade4 = pessoas.filter(obj => obj.idade === 4);

console.log(PessoasComIdade4);

//Retornar a pessoa que a ultima letra do nome termina com n

const ultimaLetraN = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('n');
});

console.log(ultimaLetraN);