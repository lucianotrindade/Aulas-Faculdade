// Dado primitivo ()
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];

    }
    // Metodo que acelera o carro e não permite uma velocidade maior que 100km
    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    //Metodo que freia o carro e contém um if para o valor não ficar negativo        
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

}

const carro1 = new Carro('fusca');

for (i = 0; i < 100; i++) {
    carro1.acelerar();
}

console.log(carro1);