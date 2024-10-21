// Captura o evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const inputNumum = e.target.querySelector('#num1');
    const inputNumdois = e.target.querySelector('#num2');

    const Numum = Number(inputNumum.value);
    const Numdois = Number(inputNumdois.value);

    // Verifica se os números são válidos
    if (isNaN(Numum) || isNaN(Numdois)) {
        setResultado(`Números inválidos.`);
        return;
    }

    // Função que compara os números e exibe o resultado
    const paisagem = Numum >= Numdois ? true : false;
    const mensagem = `O maior número é: ${paisagem}`;

    setResultado(mensagem);
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
