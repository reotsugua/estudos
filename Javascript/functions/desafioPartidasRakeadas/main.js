function getVitoriaAndDerrotas(vitorias, derrotas) {
    if (typeof (vitorias) !== 'number') return console.log(`${vitorias}, não é um number`);
    if (typeof (derrotas) !== 'number') return console.log(`${derrotas}, não é um number`);

    const saldo = vitorias - derrotas;
    const rank = verificarRank(vitorias);

    return {saldo, rank}
}

function verificarRank(vitorias) {
    if (vitorias < 10) return 'ferro';
    if (vitorias < 20) return 'prata';
    if (vitorias < 30) return 'ouro';
    return 'Diamante';
}


function showMessage(saldo, nivel) {
    console.log(`O Herói tem saldo de ${saldo} vitórias e está no nível ${nivel}, `)
}


const {saldo, rank} = getVitoriaAndDerrotas(10, 6);
showMessage(saldo, rank);



// OUTRO JEITO
const resultado =  (vitorias, derrotas) => {
    if (typeof (vitorias) !== 'number') return console.log(`${vitorias}, não é um number`);
    if (typeof (derrotas) !== 'number') return console.log(`${derrotas}, não é um number`);

    return vitorias - derrotas;
}

const rank = vitorias => {
    if (vitorias < 10) return 'ferro';
    if (vitorias < 20) return 'prata';
    if (vitorias < 30) return 'ouro';
    return 'Diamante';
}

function showMessage(resultado, rank) {
    console.log(`O Herói tem saldo de ${resultado} vitórias e está no nível ${rank}.`)
}

const vitorias = 10;
const derrotas = 6;


showMessage(resultado(vitorias,derrotas), rank(vitorias));