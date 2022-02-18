import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    #saldo = 0;
    #cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    sacar(valor) {
        if(valor > 0) {
            if(this.#saldo >= valor) {
                this.#saldo -= valor;
            }
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor;
        }
    }

    mostrarSaldo() {
        return this.#saldo;
    }

    transferir(valor, conta) {
        if(valor <= this.#saldo) {
            const sacar = this.sacar(valor);
            conta.depositar(sacar);
        } else {
            return false
        }
    }
}