import { FormatoData } from "../types/FormatoData.js";
import { formaterData, formaterMoeda } from "../utils/formatters.js";

let saldo: number = 3000;

const elementoSaldo: HTMLElement = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso: HTMLElement = document.querySelector('.block-saldo time') as HTMLElement;



if (elementoSaldo != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formaterData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

export function getSaldo(): number {
    return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formaterMoeda(saldo);
    }
}

