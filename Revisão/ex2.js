// Uma linha de produção registrou a quantidade de peças com defeito em 6 inspeções. O programa deve ler
// os valores e calcular o total e a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço for para solicitar exatamente 6 valores.
// ☐ Somar cada valor ao acumulador.
// ☐ Ao final, calcular a média.
// ☐ Exibir total e média.
// ☐ Não repetir manualmente seis comandos de entrada.

// laço sempre vai ser o for ele e usado para repetir a frase 
// let = Vai ser mudada o valor dentro dele e para isso que serve 
const entrada = require (`readline-sync`);

let acumulador = 0;

for (let i = 1; i <=6; i++){
const inspecoes = entrada.questionFloat(`Qual e a quantidade de pecas com defeito:`)
acumulador += inspecoes;
}
 const media = acumulador /6

console.log(`A quantidade de inpencoes e ${acumulador} e a media final e ${media}`)




