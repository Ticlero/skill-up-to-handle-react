import React from "react";
import { useState } from "react";

const Say = () => {
  /**
   *  useState 함수의 입력되는 파라미터는 사용할 state의 초기값을 입력
   *  useState 은 배열을 반환하는데
   *           첫 번째 원소는 state의 현재 상태 값
   *           두 번째 원소는 state의 상태를 바꾸어 주는 함수 (setter 함수)
   */
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히가세요");
  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>

      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>

      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
