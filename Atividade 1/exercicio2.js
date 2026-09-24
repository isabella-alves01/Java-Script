const entrada = require(`readline-sync`);

const NomeMaterial = entrada.question(`Qual e o nome do material?`);
const QuantidadeMaterial = entrada.question(`Qual e a quantidade de material que voce quer?`);
const PrecoUnitario = entrada.questionFloat(`Qual e o preco unitario desse material?`)

const ValorTotal = QuantidadeMaterial * PrecoUnitario;
console.log(`===SISTEMA DE COMPRAS===`);
console.log(`O nome do seu mateterial e ${NomeMaterial}`);
console.log(`A quantidade que voce pegou é de ${QuantidadeMaterial}`);
console.log(`O valor total que voce ira pagar e de ${ValorTotal.toFixed(2)}`)