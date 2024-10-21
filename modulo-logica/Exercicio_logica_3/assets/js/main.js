// Captura o evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const inputNumum = e.target.querySelector('#num1');

    const Numum = Number(inputNumum.value);

    // Verifica se os números são válidos
    // if (isNaN(Numum) || isNaN(Numdois)) {
    //     setResultado(`Número inválido.`);
    //     return;
    // }

    // Função que compara os números e exibe o resultado

    if (Numum % 3 === 0 && Numum % 5 === 0) {
        setResultado(`${Numum} é divisível por 3 e por 5. FIZZBUZZ`);
        return;
    } else if (Numum % 3 === 0) {
        setResultado(`${Numum} é divisível por 3. FIZZ`);
        return;
    } else if (Numum % 5 === 0) {
        setResultado(`${Numum} é divisível por 5. BUZZ`);
        return;
    } else {
        setResultado(`${Numum} não é divisível por 3 nem por 5.`);
        return;
    }
  
});

// Função para criar o parágrafo onde o resultado será exibido
function criaP() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

// Função para exibir o resultado na tela
function setResultado(resultado) {
    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    const p = criaP(); 
    p.innerHTML = resultado;
    resultadoDiv.appendChild(p); // Adiciona o parágrafo ao div de resultado
}
