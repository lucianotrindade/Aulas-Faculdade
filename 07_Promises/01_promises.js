function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) +min );
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('ERROR');
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

esperaAi('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('frase 2', rand(1, 3)); // Simulando um erro
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log(e);
});
