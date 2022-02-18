import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cc = new ContaCorrente();
cc.depositar(100);
cc.agencia = "001";
const cliente1 = new Cliente();
cliente1.cpf = "6210374933"
cliente1.nome = "Joao"
cc.cliente = cliente1;
console.log(cc.cliente);



