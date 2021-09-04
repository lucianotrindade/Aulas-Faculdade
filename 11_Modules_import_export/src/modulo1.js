// Podemos exportar diretamente usando o export antes do tipo da variável e/ou antes do function

export const nome = 'Luciano';
export const sobrenome = 'Trindade';
export const idade = 30;

// colocando o default ele fica como modulo padrão e só podemos colocar um default
export default function soma(x, y) {
    return x + y;
}

//export { nome, sobrenome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    }
}