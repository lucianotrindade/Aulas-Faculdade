/*function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
       //value: estoque, //valor
        //writable: true, //pode alterar
        configurable: true // configuravel
    });
}

//const p1 = new Produto('camisa', 20, 3);
//console.log(p1);*/

// Getter-----

const produto = {
    _valor: 1,
    get valor(){
        return this._valor++;
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
};

console.log(produto.valor);
produto.valor =100;
console.log(produto.valor, produto.valor);

