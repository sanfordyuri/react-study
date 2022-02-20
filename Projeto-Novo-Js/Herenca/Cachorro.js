import { Animal } from "./Animal.js";

export class Cachorro extends Animal {
    constructor() {
        super('Cão', '15-110cm', 'terrestre');
    }

    emitirSom() {
       super.emitirSom('Au Au') 
    }
}