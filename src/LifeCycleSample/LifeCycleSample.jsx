import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  //static getDerivedStateFromProps(nextProps, prevState){}

  // props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때 와 업데이트 될 때 호출
  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log(`getDerivedStateFromProps`);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  };

  // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
  // 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출 하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리
  componentDidMount = () => {
    console.log(`componentDidMount`);
  };

  // props 또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드
  // 이 메서드는 반드시 true or false 값을 반환해야 함
  // 따로 생성하지 않을 경우 언제나 true 값을 반환
  // 이 값이 false이면 업데이트 과정은 여기서 중지된다.
  // 업데이트 전의 props, state 값은 this.props, this.state로 접근, 새로 설정될 props, state 값은 nextProps, nextState로 접근
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(`shouldComponentUpdate before value`, this.props, this.state);
    console.log(`shouldComponentUpdate updated value`, nextProps, nextState);
    // console.log(nextState.number);
    return nextState.number % 10 !== 4;
  };

  // 컴포넌트를 DOM에서 제거할 때 실행된다.
  // componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 함
  componentWillUnmount = () => {
    console.log(`componentWillUnmount`);
  };

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 이 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.
  // 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있는데 주로 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용.
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(`getSnapshotBeforeUpdate`);
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  };

  // 리렌더링을 완료한 후 실행된다.
  // 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 무방
  // prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다.
  // 세 번째 파라미터 `snapshot`는 getSnapshotBeforeUpdate에서 반환한 값이 있다.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate`, prevProps, prevState);
    if (snapshot) {
      console.log(`업데이트되기 직전 색상: `, snapshot);
    }
  }

  // 컴포넌트의 모양새를 정의
  render() {
    console.log(`render()`);
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/*this.props.missing.value*/}
        <h1
          style={style}
          ref={(ref) => {
            this.myRef = ref;
          }}
        >
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycleSample;
