//  o const faz armazenamento dentro da memoria 
const entrada = require('readline-sync');
const qdtProHora = entrada.questionInt(`Digite a quantidade de peca produzida por hora?`);
const HorasTurno = entrada.questionInt(`Digite a quantidade de horas trabalhadas por turno?`);

const prodTotal = qdtProHora * HorasTurno

console.log("\n===RELATORIO DE PRODUCAO===");
console.log(`pecas produzidas por hora ${qdtProHora}`);
console.log(`Horas do turno ${HorasTurno}`);
console.log(`Total produzido: ${prodTotal} pecas`)

// forma como eu escrevo no java para aparecer no terminar
// com `` eu consigo misturar texto com numero 
// \n quebra de linha





