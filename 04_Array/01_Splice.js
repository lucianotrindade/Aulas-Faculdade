/*
*** O METODO ALTERA O CONTEÚDO DE UMA MATRIZ, REMOVENDO OU ALTERANDO ELEMENTOS EXISTENTES OU AINDA     ADICIONANDO ELEMENTOS

*** splice(indice, delete, elem1, elem2)
-- Start = O indice que inicia a açteração da matriz.
-- Delete = Número inteiro que coresponde a quantidade de elementos a serem removidos.
-- Item1, item2,  = os elementos a serem adicionados ao array
*/


//const nomes = [ "Luciano", "Aparecido", "Trindade"];
//nomes.splice(0,1); exclui o elemento 0
//nomes.splice(-1, 10); exclui o ultimo elemento
//nomes.splice(0, 0 , "Samuel"); Inclui um elemento no começo.
//nomes.splice(nomes.length,0, "Santana"); Inclui um elemento no //final do Array
//nomes.splice(0, 1, "Samuel"); Modifico o array
//console.log(nomes);

const frutas = [];

frutas.splice(0, 0, 'Maça');
frutas.splice(frutas.length, 0, 'Banana');

console.log(frutas);
console.log(frutas.length);
console.log(`O indice da posição 0 é ${frutas[0]}!`);