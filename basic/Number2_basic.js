
const numero = Number(prompt('DIGITE UM NUMERO : '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> Raiz Quadrada : ${numero ** 0.5}.<p>`;
texto.innerHTML += `<p> É NaN : ${Number.isNaN(numero)}.<p>`;
texto.innerHTML += `<p> ${numero} É inteiro : ${Number.isInteger(numero)}.<p>`;
texto.innerHTML += `<p> Arredondando para cima : ${Math.floor(numero)}.<p>`;
texto.innerHTML += `<p> Arredondando para baixo : ${Math.ceil(numero)}.<p>`;
texto.innerHTML += `<p> 2 Casas Decimais : ${numero.toFixed(2)}.<p>`;




