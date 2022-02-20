

function Home() {
    return (
        <div>
            <form>
                <label>
                    CEP:
                    <input type="text" id="cep"></input>
                    Bairro:
                    <input type="text" id="bairro"></input>
                </label>
            </form>
            <button onClick={async () => {
                const cep = document.getElementById('cep')
                console.log(cep.innerText);
                const url = `https://viacep.com.br/ws/60713030/json/`;
                const endereco = await fetch(url)
                const enderecojson = await endereco.json();
                document.getElementById('bairro').innerHTML = enderecojson.bairro
            }}>Buscar</button>    
        </div>
    )
}

export default Home;