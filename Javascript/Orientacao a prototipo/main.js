const pessoa = {
    idade: 18
}

const renan = {
    nome: 'renan',
    __proto__: pessoa,
    idade: 32
}

console.log(renan)