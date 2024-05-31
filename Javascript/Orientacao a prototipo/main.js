function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

Pessoa.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const renan = new Pessoa;
renan.falar()


