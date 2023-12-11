/**
    Lorenzo jaeger Miranda tem 30 anos, pesa 84 kg
    tem 1.8 de altura e seu IMC é de 25.925925925925924
    Luiz Otávio nasceu em 1980
*/

const nome = 'Lorenzo'
const sobrenome = 'jaeger'
const idade = 21
const peso = 94
const altura = 1.80
let IMC // peso / (altura * altura)
let anoNascimento

IMC = peso / (altura * altura)
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} ${sobrenome} nasceu em  ${anoNascimento} `);