import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent/MyComponent";

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
          <MyComponent
            name={properties.name}
            age={properties.age}
            fiance={properties.fiance}
          ></MyComponent>
          {/* <MyComponent></MyComponent> */}
        </div>
      </div>
    );
  }
}

export default App;
