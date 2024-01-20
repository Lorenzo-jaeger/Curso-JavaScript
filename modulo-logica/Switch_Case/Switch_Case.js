//Switch Case
const data = new Date();
const dia = data.getDay() + 1;
let diaDaSemana

switch (dia) {
    case 1:
        diaDaSemana = 'domingo'
        break;
    case 2:
        diaDaSemana = 'segunda'
        break;
    case 3:
        diaDaSemana = 'terça'
        break;
    case 4:
        diaDaSemana = 'quarta'
        break;
    case 5:
        diaDaSemana = 'quinta'
        break;
    case 6:
        diaDaSemana = 'sexta'
        break;
    case 7:
        diaDaSemana = 'sabado'
        break;
    default:
        break;
}

console.log(`hoje é ${diaDaSemana}, dia ${dia} da semana`);