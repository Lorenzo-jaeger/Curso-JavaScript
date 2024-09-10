const pessoa ={
    nome: "pedro",
    sobrenome: "carvalho",
    idade: 30,
    endereco: {
        rua: "Av. Assis Brasil",
        numero: 218,
    }
}

//Atribuição via desestruturação
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);
