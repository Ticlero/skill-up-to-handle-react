import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import IterationSample from "./IterationSample/IterationSample";
import LifeCycleSample from "./LifeCycleSample/LifeCycleSample";
import Counter from "./MyComponent/Counter";
import EventPractice from "./MyComponent/EventPractice";
import EventPracticeFunctionForm from "./MyComponent/EventPracticeFunctionForm";
import MyComponent from "./MyComponent/MyComponent";
import Say from "./MyComponent/Say";
import RefPractice from "./refPractice/RefPractice";
import ValidationSample from "./ValidationSample/ValidationSample";

const getRandomColor = () => {
  return `# ${Math.floor(Math.random() * 16777215).toString(16)}`;
};

class App extends Component {
  state = {
    color: `#000000`,
  };

  handlerClick = (e) => {
    this.setState({
      color: getRandomColor(),
    });
  };
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
          {/* <ValidationSample></ValidationSample> */}
          {/* <RefPractice
            ref={(ref) => {
              this.refPractice = ref;
            }}
          ></RefPractice>
          <button
            onClick={() => {
              this.refPractice.scrollToBottom();
            }}
          >
            맨 밑으로
          </button> */}
          {/* <IterationSample></IterationSample> */}
          <button onClick={this.handlerClick}>Random Color</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color}></LifeCycleSample>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
