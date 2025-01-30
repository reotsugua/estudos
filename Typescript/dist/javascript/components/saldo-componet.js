import { FormatoData } from "../types/FormatoData.js";
import { formaterData, formaterMoeda } from "../utils/formatters.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoSaldo != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formaterData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formaterMoeda(saldo);
    }
}
