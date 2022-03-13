import React, { Component } from 'react'

export default class BuscarCep extends Component {

    constructor() {
        super();
        this.cep = '';

        this.state = ({
            logradouro: '',
            bairro: '',
            cidade: ''
        });

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClicked = this.handleBtnClicked.bind(this);
    }

  handleInputChange(e) {
    this.cep = e.target.value;
  }    

  async handleBtnClicked(e) {
    const url = `https://viacep.com.br/ws/${this.cep}/json/`;
    const data = await fetch(url);
    const result = await data.json();
    
    this.setState({
        logradouro: result.logradouro,
        bairro: result.bairro,
        cidade: result.localidade
    });
  }

  render() {
    return (
      <center>
          <input 
          onChange={this.handleInputChange}
          placeholder='Insira um CEP'/>
          <div/>
          <p>Logradouro: {this.state.logradouro}</p>
          <div/>
          <p>Bairro: {this.state.bairro}</p>
          <div/>
          <p>Cidade: {this.state.cidade}</p>
          <div/>
          <button onClick={this.handleBtnClicked}>Pesquisar</button>
      </center>
    )
  }
}
