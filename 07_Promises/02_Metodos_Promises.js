function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) +min );
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('ERROR');
            return
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

// Promise.all - - Promise.race - - Promise.resolve - - Promise.reject
/*
const promises = [
    'Promeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    //esperaAi(222222, 500), // simulando o erro
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
*/


// Promise.race
/*
const promises = [
  
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    //esperaAi(222222, 500), // simulando o erro
    esperaAi('Promise 3', 1000),
 
];

Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
*/


