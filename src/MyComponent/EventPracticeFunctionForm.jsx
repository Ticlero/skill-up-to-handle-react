import React, { useState } from "react";

const EventPracticeFunctionForm = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onChangeEvent = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = (e) => {
    //alert(`사용자: ${userName}, Comment: ${message}`);
    alert(`사용자: ${form.userName}, Comment: ${form.message}`);
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        placeholder="사용자 명"
        // onChange={onChangeUserName}
        onChange={onChangeEvent}
        //value={userName}
        value={form.userName}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        //onChange={onChangeMessage}
        onChange={onChangeEvent}
        onKeyPress={onKeyPress}
        //value={message}
        value={form.message}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFunctionForm;
