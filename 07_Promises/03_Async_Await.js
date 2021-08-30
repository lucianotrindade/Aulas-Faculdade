function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERROR');
                return
            }
            resolve(msg);
        }, tempo)
    })
}

async function executa() {
    try {
        const fase1 = await esperaAi('fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
 
}

executa()

