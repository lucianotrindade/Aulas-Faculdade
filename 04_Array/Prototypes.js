function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
// Promo que calcula desconto em um item 
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 100.00);
p1.desconto(10);

const p2 = new Produto('Bermuda', 59.90);
p2.desconto(10);

console.log(p1);
console.log(p2);
