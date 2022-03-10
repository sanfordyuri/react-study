import { Component } from "react";

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <span>Bem vindo, {this.props.name}</span>
      </div>
    );
  }
}

export default WelcomeComponent;
