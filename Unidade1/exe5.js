const prompt = require("prompt-sync")();
const palavra = prompt("Digite uma palavra ");


console.log(`Quantidade de caracteres: ${palavra.length}`);
 
const inverter = palavra.split('').reverse().join('');
if (palavra.toLowerCase() === inverter.toLowerCase()){
    console.log("A palavra é uma palíndromo!");
} else {
    console.log("A palavra não é uma palídromo");
}
