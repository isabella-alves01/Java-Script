const entrada = require(`readline-sync`);

const PresoPeca = entrada.questionFloat(`Qual e o peso da pesa? `);

if(PresoPeca >=95 && PresoPeca <=105 ){
    console.log(`Aprovada`);
} else{
    console.log(`Reprovado`);
}

