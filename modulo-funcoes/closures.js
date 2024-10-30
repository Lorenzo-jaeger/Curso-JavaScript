function retornaFuncao(name) {
    return function() {
        return name;
    };
}

const funcao = retornaFuncao('lorenzo');
const funcao2 = retornaFuncao('braga');


console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
