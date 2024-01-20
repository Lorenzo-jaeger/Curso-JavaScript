//operador ternario 
// (condição como o if) ? 'true' : 'false';

const idade = 18
const maiorDeIdade = idade >= 18 ? 'maior de idade' : 'menor de idade';

const corPadrao = 'rosa'
const cor = corPadrao || 'preto';

console.log(maiorDeIdade,cor);