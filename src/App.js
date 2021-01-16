import React, { Component } from "react";
import "./App.css";
import Counter from "./MyComponent/Counter";
import EventPractice from "./MyComponent/EventPractice";
import EventPracticeFunctionForm from "./MyComponent/EventPracticeFunctionForm";
import MyComponent from "./MyComponent/MyComponent";
import Say from "./MyComponent/Say";
import ValidationSample from "./ValidationSample/ValidationSample";

class App extends Component {
  render() {
    const name = "react";
    const properties = {
      name: "장성현",
      age: 26,
      fiance: "강예린",
    };

    return (
      <div>
        <div className="react">{name}</div>
        <div>
          {/* <MyComponent
            name={properties.name}
            age={properties.age}
            fiance={properties.fiance}
          ></MyComponent>
          <Counter test="tt"></Counter>
          {<Say></Say>} */}
          {/* <EventPractice></EventPractice> */}
          {/* <EventPracticeFunctionForm></EventPracticeFunctionForm> */}
          <ValidationSample></ValidationSample>
        </div>
      </div>
    );
  }
}

export default App;
