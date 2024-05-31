function teste() {
    var res = 2
    return res
}

function  teste1 (funcao) {
    console.log(funcao())
}

function  teste2 () {
    console.log(teste())
}

teste1(teste)
teste2()