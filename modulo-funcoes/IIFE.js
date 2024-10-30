//IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Braga';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lorenzo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80)