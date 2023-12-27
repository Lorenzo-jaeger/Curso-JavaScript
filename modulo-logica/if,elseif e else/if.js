// Define a variável 'hora' com o valor 12
const hora = 12;

// Define variáveis para armazenar as mensagens de saudação
const bomDia = "bom dia";
const boaTarde = "boa Tarde";
const boaNoite = "boa Noite";

// Define uma variável para armazenar a mensagem de erro
const error = "olá, erro na hora";

// Estrutura condicional para determinar a saudação apropriada baseada na hora
if (hora >= 0 && hora < 12){  
    // Se a hora for entre 0 (inclusive) e 12 (exclusivo), imprime "bom dia"
    console.log(bomDia);
} else if (hora >= 12 && hora <= 18){  
    // Se a hora for entre 12 (inclusive) e 18 (inclusive), imprime "boa Tarde"
    console.log(boaTarde);
} else if (hora > 18 && hora <= 24){  
    // Se a hora for entre 18 (exclusivo) e 24 (inclusive), imprime "boa Noite"
    console.log(boaNoite);
} else {  
    // Se a hora não estiver no intervalo de 0 a 24, imprime a mensagem de erro
    console.log(error);
}
