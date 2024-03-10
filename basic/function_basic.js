function saudacao(nome){
    return `Bom Dia ${nome}! `;
}

let seila = saudacao('Luiz');
console.log(seila);

function soma(y ,x){
    return y + x;
}
console.log(soma(2,2));

const raiz = function(n){
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(81));
console.log(raiz(144));

const raiz1 = (n)  => {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(81));
console.log(raiz(144));