import React, { Component } from "react";

export default class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Escolhido: "",
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
  }

  handleChangeSelect(e) {
      this.setState({
          Escolhido: e.target.value
      });
  }

  render() {
    return (
      <div>
        Escolha um:
        <select onChange={this.handleChangeSelect}>
          {this.props.lista.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        {
            this.state.Escolhido !== "" ? <p>Escolhido: {this.state.Escolhido}</p> : ""
        }
      </div>
    );
  }
}
