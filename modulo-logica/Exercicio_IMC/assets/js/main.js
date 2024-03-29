//captura de movimento de submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#Peso')
    const inputAltura = e.target.querySelector('#Altura')

    const Peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    if (!Peso || !Altura) {
        setResultado(`Peso ou altura inválido.`, false);
        return;

    }

    const IMC = Peso / (Altura * Altura);
    const IMCFORMAT = IMC.toFixed(1);

    if (IMC < 17) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Muito abaixo do peso.`, false);
    } else if (IMC >= 17 && IMC < 18.5) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Abaixo do peso.`, false);
    } else if (IMC >= 18.5 && IMC < 25) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Peso normal.`, true);
    } else if (IMC >= 25 && IMC < 30) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Acima do peso.`, false);
    } else if (IMC >= 30 && IMC < 35) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Obesidade grau I.`, false);
    } else if (IMC >= 35 && IMC <= 40) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Obesidade grau II.`, false);
    } else if (IMC > 40) {
        setResultado(`Seu IMC é de ${IMCFORMAT}, Obesidade grau III.`, false);
    }
    console.log(IMC);
})

function criaP() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}


function setResultado(resultado, status) {
    const resultadoImc = document.querySelector('#resultado');
    resultadoImc.innerHTML = '';

    const p = criaP();
    p.innerHTML = resultado;
    
    // if (status === false) {
    //     p.classList.add('pesso-ruim')
    // } else if(status === true)  {
    //     p.classList.add('pesso-bom')
    // }
    resultadoImc.appendChild(p)
}