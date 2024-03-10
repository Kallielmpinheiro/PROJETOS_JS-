function criapessoa(nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}

let pes1 = criapessoa('bruno','miranda','12');
console.log(pes1.nome,pes1.sobrenome);

const pessoa1 = {
    nome:'Luiz',
    sobrenome:'Miranda',
    idade: 25,  

Fala(){
    // console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    console.log(`a minha idade atual e ${this.idade}`);
},
    IncrementaIdade(){
        this.idade++;
    }
};

pessoa1.Fala();
