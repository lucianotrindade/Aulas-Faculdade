// function construtora sempre começa com a primeira letra maiusculo.
// function construtora sempre cria um objeto. 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luciano', 'Trindade');

console.log(typeof(p1));

