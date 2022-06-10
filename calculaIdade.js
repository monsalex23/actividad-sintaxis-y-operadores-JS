function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Karen",
    idade: 25
};

const pessoa2 = {
    nome: "Marcia",
    idade: 70
};

const animal = {
    nome: "king",
    idade: 5,
    raca: "siames"
};

console.log(calculaIdade.apply(animal, [3]));