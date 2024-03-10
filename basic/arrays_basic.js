//
const alunos = ['Luiz', 'Ana', 'Caio'];

alunos.unshift('Pedro'); // Adiociona ao comeco do vetor alterando a posição do index
alunos.unshift('Bruna');

console.log(alunos);

alunos.push('Otavio'); // Adiona ao fim do vetor não mudando a posição e sim acresentando mais valores
alunos.push('Matheus');

console.log(alunos);

alunos.pop(); // remove valores do vetor no final
alunos.shift(); // remove do comeco

const removido = alunos.shift();
console.log(removido); // forma de mostrar o removido e armazenar o nome dela em variavel 
console.log(alunos);