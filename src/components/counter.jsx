import { useState } from "react";

const Counter = () => {
  const [list, setList] = useState(0);

  const increament = () => {
    setList(list + 1);
  };
  const decreament = () => {
    if (list > 0) {
      setList(list - 1);
    } else {
      setList(list > 0 ? list - 1 : 0);
    }
  };
  return (
    <>
      <h1>Counter Application</h1>
      <h2>{list}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </>
  );
};

export default Counter;
