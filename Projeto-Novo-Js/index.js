import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cc = new ContaCorrente();
cc.depositar(100);
console.log(cc.mostrarSaldo());


