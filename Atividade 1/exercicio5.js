const entrada = require(`readline-sync`);

const pecasPorCiclo = entrada.questionInt(`Pecas produzidas por ciclos:`);

for (let ciclo =1; ciclo <=10; ciclo++){
    const producao = ciclo * pecasPorCiclo;
    console.log(`Ciclo ${ciclo}: ${producao} pecas acumuladas`)
}
