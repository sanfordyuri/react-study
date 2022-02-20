import fetch from "node-fetch";


async function endereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const data = await fetch(url)
    const datajson = await data.json()
    console.log(datajson.bairro)
}

endereco('60713030')