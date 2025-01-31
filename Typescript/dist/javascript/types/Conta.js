import { TipoTransacao } from "./TipoTrasacao";
let saldo = 3000;
const Conta = {
    /**
     * getSaldo
     */
    getSaldo() {
        return saldo;
    },
    /**
     * getDadaAcesso
     */
    getDadaAcesso() {
        return new Date();
    },
    /**
     * registrarTransacao
     */
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }
        console.log(novaTransacao);
    },
};
export default Conta;
