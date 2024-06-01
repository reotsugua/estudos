const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: '1A'
    },
    {
        nome: 'Lucas',
        nota: 7,
        turma: '2B'
    },
    {
        nome: 'Ana',
        nota: 9,
        turma: '2A'
    },
    {
        nome: 'Tiago',
        nota: 6,
        turma: '3B'
    },
    {
        nome: 'Sofia',
        nota: 10,
        turma: '3A'
    }
];

let aprovados = []

function teste(arr, mediaFinal) {
    for (let index = 0; index < arr.length; index++) {
        const {nome, nota} = arr[index]
        if (nota >= mediaFinal) {
            aprovados.push(nome)
        }        
    }
    return aprovados;
}


function teste1(arr, mediaFinal) {
    return arr.filter(({nota}) => nota >= mediaFinal) // Destructuring direto no filter
              .map(({nome}) => nome); // Mapeia os resultados filtrados para obter apenas os nomes
}

const novo = teste(alunos, 7)
const novo1 = teste1(alunos, 7)
console.log(novo)
console.log(novo1)
