// import React from "react";
//import PropTypes from "prop-types";

// const MyComponent = ({ name, age, fiance }) => {
//   return (
//     <div>
//       <div>이름: {name}</div>
//       <div>나이: {age}</div>
//       <div>약혼자: {fiance}</div>
//     </div>
//   );
// };

// export default MyComponent;

import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, age, fiance } = this.props;
    return (
      <div>
        <div>이름: {name}</div>
        <div>나이: {age}</div>
        <div>약혼자: {fiance}</div>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "강예린",
  age: 23,
  fiance: "장성현",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  fiance: PropTypes.string.isRequired,
};

export default MyComponent;
