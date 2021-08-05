// Reduce = Reduz um array em somente um elemento.

//Somando valores. 
const valores = [5, 6, 8, 20, 15, 64, 93, 52, 85, 5];
const soma = valores.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
},0);

console.log(soma);