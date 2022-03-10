import { Component } from "react";

class ContadorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.handleBtnClick = this.handleBtnClick.bind(this); // É recomendado o bind no Construtor para Evitar perda de Desempenho
  }

  handleBtnClick(e) {
    e.preventDefault();
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <p>Contador = {this.state.contador}</p>
        <button
          onClick={this.handleBtnClick}>
          Incrementar
        </button>
      </div>
    );
  }
}

export default ContadorComponent;
