// Podemos usar o Concat para juntar um Array ou o ...Spread.
// Concat eu cria um novo Array agrupando os dados enviados por parâmetros. ele não muda o valor somente concatena, podemos também concatenar Strings e Numbers;

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

//const concatenando = num1.concat(num2);// Concatenando um Array

//const concatenando = [...num1, ...num2];//Concatenando com Spread.

const concatenando = [...num1, 'Luciano', ...num2];

console.log(concatenando);