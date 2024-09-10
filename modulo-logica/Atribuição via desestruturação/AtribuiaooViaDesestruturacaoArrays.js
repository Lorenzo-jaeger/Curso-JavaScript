const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [fistNumber, secondNumber, ...resto] = numbers;

console.log("o primeiro numero é " + fistNumber, "e o segundo numero é " + secondNumber);
console.log("o resto é " +resto);

//                    0             1             2
//                0   1   2     0   1   2     0   1   2   
const dezenas = [[10, 20, 30], [40, 50, 60], [70, 80,90]];

console.log("a dezena é " + dezenas[1][2]); //60
