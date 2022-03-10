import React, { Component } from 'react'

export default class BuscadorDeCepComponent extends Component {

    constructor(props) {
        super(props);

        this.cep = '';

        this.state = ({
            bairro: '',
            logradouro: ''
        }); 

        this.handlePesquisar = this.handlePesquisar.bind(this);
        this.handleChangeInputCep = this.handleChangeInputCep.bind(this);
    }

    async handlePesquisar(e) {
        const url = `https://viacep.com.br/ws/${this.cep}/json/`;
        const data = await fetch(url);
        const result = await data.json();
        this.setState({
            bairro: result.bairro,
            logradouro: result.logradouro
        });
    }

    handleChangeInputCep(e) {
      e.preventDefault();
      this.cep = e.target.value;
    }

  render() {
    return (
      <div>
          <input 
            onChange={this.handleChangeInputCep} 
            placeholder='Insira um Cep'/>
          <div />
          <span>Bairro: {this.state.bairro}</span>
          <div/>
          <span>Longradouro: {this.state.logradouro}</span>
          <div/> 
          <button onClick={this.handlePesquisar}>Pesquisar</button>
      </div>
    )
  }
}
