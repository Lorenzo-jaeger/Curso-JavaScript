/*
operadores de comparação
> : maior que 
< : menor que 
>= :maior ou igual
<= :menor ou igual
== :igualdade
=== :igualdade estrita ( mesmo valor e tipo)
!= :diferente
!== :diferente estrito
*/

//declaramos os valores ao const num1 e const num2
const num1 = 10;
const num2 = "10";

//aqui comparamos se num1 é igual a num2
const comp = num1 == num2;

console.log("comparando se num1 é igual a num2 :",comp);//true

//declaramos os valores ao const num3 e const num4
const num3 = 10;
const num4 = "10";

//aqui comparamos se num1 é igual a num2 em valor e tipo
const comp2 = num1 === num2;

console.log("se num3 é igual a num4 em valor e tipo :",comp2);//false

//declaramos os valores ao const num5 e const num2
const num5 = 10;
const num6 = 9;

// aqui vemos se num5 é maior que o num6
const comp3 = num5 > num6;

console.log("aqui vemos se num5 é maior que o num6 :",comp3);//true

//declaramos os valores ao const num7 e const num8
const num7 = 10;
const num8 = 9;

//aqui comparamos se num7 é menor que num8 
const comp4 = num7 < num8;

console.log("aqui comparamos se num7 é menor que num8  :",comp4);//false

//declaramos os valores ao const num9 e const num10
const num9 = 10;
const num10 = "10";

//aqui comparamos se num9 é diferente a num10
const comp5 = num9 != num10;

console.log("comparando se num9 é igual a num9 :",comp5);//false

//declaramos os valores ao const num11 e const num12
const num11 = 10;
const num12 = "10";

//aqui comparamos se num9 é diferente a num10 em valor e tipo 
const comp6 = num11 !== num12;

console.log("se num11 é diferente a num12 em valor e tipo :",comp6);//true