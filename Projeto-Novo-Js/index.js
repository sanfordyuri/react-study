class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(valor > 0) {
            if(this.saldo >= valor) {
                this.saldo -= valor;
            }
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
        }
    }
}
