// For in -> lê os indices ou chaves do objeto                     
const pessoa = {
    nome: 'lorenzo',
    sobrenome: 'Jaeger',
    idade: 22,
}

console.log(pessoa);

for (let chave in pessoa){
    console.log(`${chave} : ${pessoa[chave]}`);    
}