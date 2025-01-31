import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formaterData, formaterMoeda } from "../utils/formatters.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoSaldo != null) {
    elementoDataAcesso.textContent = formaterData(Conta.getDadaAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formaterMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
