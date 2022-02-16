class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

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
}

const cc = new ContaCorrente();
cc.depositar(100);
console.log(cc.mostrarSaldo());


