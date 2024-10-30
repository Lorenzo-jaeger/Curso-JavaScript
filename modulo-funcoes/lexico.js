const nome = 'lorenzo';

function falaNome(e) {
    console.log(nome);
}


function usaFalaNome() {
    const nome = 'Otavio';
    falaNome(nome);
    console.log(nome);
}

usaFalaNome();