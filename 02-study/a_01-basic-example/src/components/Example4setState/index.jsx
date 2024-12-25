import React from 'react';

/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

const Counter = () => {
  // TODO
  //const [count, setCount] = React.useState(0);
  /* 上面一行等於三面這三行
  const stateArr = React.useState(0);
  const count = stateArr[0];
  const setCount = stateArr[1];
  */

  const atClick = () => {
    // TODO
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <div className="count">
        count:
        {count}
      </div>
      <button className="my-btn" onClick={atClick}>increment</button>
    </div>
  );
};

const Example4 = () => {
  return (
    <section data-name="Example4">
      <Counter />
    </section>
  );
};
export default Example4;
