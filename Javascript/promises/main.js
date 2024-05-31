const fs = require('fs')

const promessaDaLeituraDoArquivo = fs.promises.readFile('c:\\Users\\Renan\\OneDrive\\Documentos\\estudos\\Javascript\\promises\\tarefas.csv')

promessaDaLeituraDoArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf-8'))
})
console.log(process.cwd())