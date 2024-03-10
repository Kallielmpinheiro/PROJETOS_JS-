let num1 = 16; //number
let num21 = 2.5; // number

console.log(num1 + num21); // Soma

console.log(num1.toString() + num21); // Definindo o n1 como string
console.log(typeof num1);

console.log(num1.toString(2)); // Saida Binaria

console.log(num1.toFixed(2)) // Delimitando Quantidade de casas decimais apos o ponto

let temp = num1*'Ola'; // Um número tentando multiplicar uma string (NaN)
console.log(temp);

let temp1 = num1*'5';
console.log(Number.isNaN(temp1)); // retorna falso, pois é dois numeros se somando caso fosse no caso acima ia retonar true

Math

let num12 = 9.54899727;
let num2 = Math.floor(num12); // Arredonda para baixo
let num3 = Math.ceil(num12); // Arredonda para cima
// let num2 = Math.round(num1); // Arredonda para o mais proximo
console.log(num2);

console.log(Math.min(1,2,3,4,5,6,6,3,3,5,10000000,-1)) // menor numero
console.log(Math.max(1,2,3,4,5,6,6,3,3,5,10000000,-1)) // maior numero
console.log(Math.random()); // retorna um numero aleatorio entre (0,1)

const aleatorio1 = Math.random(); // Guardando Um numero aleatorio na variavel
console.log(aleatorio);

const aleatorio = Math.round(Math.random() * (10 - 5) + 5 )  ; // entre 5 e 10
console.log(aleatorio);

console.log(Math.PI); // Valor d pi

console.log(Math.pow(2,10));
console.log(2**10); // exponenciação

console.log(num1 ** 0.5);