function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

function processaEntradaUsuario(callback) {
    const nome = prompt("Por favor, insira seu nome.");
    callback(nome); // Aqui o callback é chamado
}

processaEntradaUsuario(saudacao);
