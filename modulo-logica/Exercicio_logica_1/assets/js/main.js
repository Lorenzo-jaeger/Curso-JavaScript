//captura de movimento de submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNumum = e.target.querySelector('#num1')
    const inputNumdois = e.target.querySelector('#num2')

    const Numum = Number(inputNumum.value);
    const Numdois = Number(inputNumdois.value);

    if (!Numum || !Numdois) {
        setResultado(`Números inválidos.`, false);
        return;
    }


    if (Numum > Numdois) {
        setResultado(`o número 1 : ${Numum} é maior que o número 2 : ${Numdois}.`);
    } else if (Numum < Numdois) {
        setResultado(`o número 2 : ${Numdois} é maior que o número 1 : ${Numum}.`);
    } else if (Numum === Numdois) {
        setResultado('números iguais.');
    } 
})

function criaP() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}


function setResultado(resultado) {
    const resultadoImc = document.querySelector('#resultado');
    resultadoImc.innerHTML = '';

    const p = criaP();
    p.innerHTML = resultado;
    
    resultadoImc.appendChild(p)
}