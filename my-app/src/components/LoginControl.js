import React, { Component } from "react";

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick(e) {
    e.preventDefault();
    this.setState({
        isLogged: !this.state.isLogged
    });
  }

  render() {
    let text;
    const isLogged = this.state.isLogged;

    isLogged ? text = "Logout" : text = "Login";

    let btn = <button onClick={this.handleBtnClick}>{text}</button>;

    return <div>{btn}</div>;
  }
}
