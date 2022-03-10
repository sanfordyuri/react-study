import { Component } from "react";
import BuscarCepComponent from "./BuscarCepComponent";

class App extends Component{

  async PesquisarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const result = await fetch(url);
    const resultJson = await result.json();
    if(resultJson.erro == true) {
      alert('Erro ao buscar cep, aparentemente inexistente')
    } else {
      alert(resultJson.bairro + ", " + resultJson.logradouro 
      + " em " + resultJson.localidade + " - " + resultJson.uf);
    }
  }

  render() {
    return (
      <section className="conteudo">
        <BuscarCepComponent PesquisarCep={this.PesquisarCep.bind(this)}/>
      </section>
    );
  }
}

export default App;
