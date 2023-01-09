import React from "react";

const Counter = React.memo(({ value, children, onClick }) => {
  console.log("Render: ", children);

  return (
    <button onClick={onClick}>
      {children}: {value}
    </button>
  );
});

const App = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increaseCounter1 = () => {
    setCount1((count1) => count1 + 1);
  };

  const increaseCounter2 = () => {
    setCount1((count2) => count1 + 1);
  };

  return (
    <>
      <Counter value={count1} onClick={increaseCounter1}>
        Counter 1
      </Counter>
      <Counter value={count2} onClick={increaseCounter2}>
        Coutner 2
      </Counter>
    </>
  );
};

export default App;
