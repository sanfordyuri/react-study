export class Animal {
    constructor(especie, tamanho, classificacao) {
        this.especie = especie
        this.tamanho = tamanho
        this.classificacao = classificacao
    }

    emitirSom(som) {
        console.log(`${this.especie} emitindo: ${som}`)
    }
}