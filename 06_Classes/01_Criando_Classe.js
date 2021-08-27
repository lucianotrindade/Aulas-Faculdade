class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} esta falando`);
    }
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    bebendo() {
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 = new Pessoa ('Luciano', "Trindade");
console.log(p1)
console.log(p1.falar());
console.log(p1.bebendo());
console.log(p1.comer());