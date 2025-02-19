function dateIsValid(data) {
    const hoje = new Date();
    const dataInserida = new Date(data);
const dataUTC = Date.UTC(dataInserida.getFullYear(), dataInserida.getMonth());
console.log("dataUTC", dataUTC);

    
    
    console.log("data", data);
    console.log("hoje", hoje);
    
    console.log("value", dataInserida);
    
    
    return dataInserida <= hoje;
    
}

function converterParaUTC(data) {
    const [ano, mes, dia] = data.split("-");
    return new Date(Date.UTC(ano, mes-1, dia));
}


document.getElementById("form").onsubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputDate = form.querySelector("input[type='date']");
    
    !dateIsValid(inputDate.value) && alert("nao pode datas futuras");

    const dataConvertida = converterParaUTC(inputDate.value);

    console.log("converitfo", dataConvertida);
    console.log("toLocaleDateString", dataConvertida.toLocaleDateString('pt-BR', {
        year: "numeric",
        weekday: "long",
        month: "long",
        timeZone: "UTC",
    }));
    console.log("toISOString", dataConvertida.toISOString());
    console.log("toUTCString", dataConvertida.toUTCString());
    
    
}