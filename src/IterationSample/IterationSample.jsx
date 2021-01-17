import React, { useState } from "react";

const IterationSample = () => {
  //   const name = [`눈사람`, `얼음`, `눈`, `바람`];
  //   const nameList = name.map((name, idx, arr) => <li key={idx}>{name}</li>);
  //   return <ul>{nameList}</ul>;

  //state 값 초기 세팅
  const [names, setNames] = useState([
    { id: 1, text: `눈사람` },
    { id: 2, text: `얼음` },
    { id: 3, text: `눈` },
    { id: 4, text: `바람` },
  ]);

  const [inputText, setInputTest] = useState(``);
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((item) => (
    <li
      key={item.id}
      onDoubleClick={() => {
        onDoubleClick(item.id);
      }}
    >
      {item.text}
    </li>
  ));

  const onClickButton = (e) => {
    setNames([...names, { id: nextId, text: inputText }]);
    setNextId(nextId + 1);
    setInputTest("");
  };

  const onChangeText = (e) => {
    setInputTest(e.target.value);
  };

  const onDoubleClick = (id) => {
    const removedNames = names.filter((item) => item.id !== id);
    setNames(removedNames);
  };

  return (
    <div>
      <ul>{nameList}</ul>
      <input type="text" value={inputText} onChange={onChangeText}></input>
      <button onClick={onClickButton}>click</button>
    </div>
  );
};

export default IterationSample;
