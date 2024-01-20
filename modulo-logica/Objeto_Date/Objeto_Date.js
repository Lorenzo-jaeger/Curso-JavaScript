//objeto Date
const data = new Date();
console.log(data.toString(),",", data);

console.log('Dia',data.getDate());
console.log('Mês',data.getMonth() + 1);
console.log('Ano',data.getFullYear());
console.log('Hora',data.getHours());
console.log('Minutos',data.getMinutes());
console.log('Segundos',data.getSeconds());
console.log('MSegundos',data.getMilliseconds());
console.log('Dia da semana',data.getDay() + 1);

console.log(`Aqui podemos ver a data de hoje: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} aqui podemos ver as horas: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
