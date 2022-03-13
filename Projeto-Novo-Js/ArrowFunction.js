import fetch from "node-fetch";

async function endereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const data = await fetch(url)
    const datajson = await data.json()
    console.log(`Rua: ${datajson.logradouro}`)
}

console.log('Depois de buscar endereco')


endereco('60713030')
