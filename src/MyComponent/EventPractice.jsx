import React, { Component } from "react";

class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      message: "",
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  //arrow형으로 함수를 만들경우 this가 객체를 잃어버리지 않음
  //함수 선언식으로 만들경우 this가 함수 호출부에 따라 변경된다.
  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState((prevState, props) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  handleClick = (e) => {
    alert(`사용자: ${this.state.userName}, Comment: ${this.state.message}`);
    //document.querySelector("input[name='message']").value = "";
    this.setState({ message: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick(e);
    }
  };

  //   handleChange(e) {
  //     console.log(e.target.value);
  //     this.setState((prevState, props) => {
  //       return {
  //         message: e.target.value,
  //       };
  //     });
  //   }
  //   handleClick(e) {
  //     alert(this.state.message);
  //     //document.querySelector("input[name='message']").value = "";
  //     this.setState({ message: "" });
  //   }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="userName"
          placeholder="사용자 명"
          onChange={this.handleChange}
          value={this.state.userName}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.message}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
