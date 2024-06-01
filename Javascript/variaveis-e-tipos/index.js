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
        // console.log(alunos[index])
        // console.log(alunos[index])
        if (arr[index].nota >= mediaFinal) {
            aprovados.push(arr[index].nome, arr[index].turma)
        }        
    }

    return aprovados;
}

const novo = teste(alunos, 10)
console.log(novo)
