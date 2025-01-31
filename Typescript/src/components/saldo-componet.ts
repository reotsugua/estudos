import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formaterData, formaterMoeda } from "../utils/formatters.js";

const elementoSaldo: HTMLElement = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso: HTMLElement = document.querySelector('.block-saldo time') as HTMLElement;



if (elementoSaldo != null) {
    elementoDataAcesso.textContent = formaterData(Conta.getDadaAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formaterMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;
