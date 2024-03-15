function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(new Error('ERRO:'))
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promisse');
        }, time);
    })
}

//promise.all promise.race promise.resolve promise.reject
const promises = [
    'first value',
    wait('first promise', 3000),
    wait('second promise', 500),
    wait('third promise', 1000),
    'last value'
];

// promise.all
Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch( function (erro) {
        console.log(erro);
    })
    