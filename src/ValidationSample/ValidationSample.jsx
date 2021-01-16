import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      clicked: false,
      vaildation: false,
    };
    this.inputPassword = React.createRef();
  }

  handlerFocus = () => {
    this.inputPassword.current.focus();
  };

  handleChange = (e) => {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  handleButtonClick = (e) => {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        clicked: true,
        vaildation: this.state.password === "0000",
      };
    });
    this.handlerFocus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.inputPassword}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked === true
              ? this.state.vaildation === true
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
