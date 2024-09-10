const elementos = [
    { tag: 'p', texto: 'paragrafo' },
    { tag: 'div', texto: 'div' },
    { tag: 'section', texto: 'section' },
    { tag: 'footer', texto: 'footer' },
]

// console.log(elementos); 
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div)