function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(new Error('ERRO:'))
        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

wait('conexao com o banco de dados', random(1, 3))
    .then(answer => {
        console.log(answer);
        return wait('buscando dados da base', random(1, 3))
    })
    .then(answer => {
        console.log(answer);
        return wait(0, random(1, 3))
    })
    .then(answer => {
        console.log(answer);
    })
    .then(answer => {
        console.log("exibe dados na tela");
    })
    .catch(e => {
        console.log(e);
    });