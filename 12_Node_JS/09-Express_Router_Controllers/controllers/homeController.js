exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome cliente: <input type="text" name="nome"><br>
    Sobre Nome: <input type="text" name="sobreNome">
    <button>Enviar</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send(`Nome: ${req.body.nome} / SobreNome: ${req.body.sobreNome}`);
};



