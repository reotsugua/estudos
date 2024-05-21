const pessoa = {
    nome: 'Renan',
    idade: 32,

    descrever: (data) => console.log(`Meu nome é ${data.nome} e 
    minha idade é ${data.idade}`)
}




pessoa.descrever(pessoa);

const pessoa1 = {
    nome: 'Renan',
    anoNascimento: 1992
};

// Desestrutura o ano de nascimento do objeto pessoa
const { anoNascimento } = pessoa1;

// Calcula a idade usando o ano atual
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

console.log(`A idade de ${pessoa.nome} é ${idade} anos.`);

const usuario = {
    nome: 'Carlos',
    email: 'carlos@example.com'
};

// Suponha que não sabemos se o usuário forneceu sua idade
const { nome, email, idade1 = 30 } = usuario;
console.log(`Nome: ${nome}, Email: ${email}, Idade: ${idade}`);
console.log(usuario);