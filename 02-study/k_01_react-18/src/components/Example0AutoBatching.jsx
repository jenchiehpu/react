import React from 'react';
import RenderTip from './RenderTip';
// https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching
const AutoMaticBatchingExample = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(100);

  // TODO
  const atIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // 結果會是 ?

    //*
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // */
  };
  // TODO
  const atBatchingUpdateFailSetTimeout = () => {
    setTimeout(() => {
      // React 17 會 render 4 次
      // React 18 只會 render 1 次
      setCount(1);
      setCount(2);
      //
      setCount2(101);
      setCount2(102);
    }, 500);
  };
  // TODO
  const atBatchingUpdateFailPromise = () => {
    Promise.resolve().then(() => {
      // React 17 會 render 4 次
      // React 18 只會 render 1 次
      setCount(1);
      setCount(2);
      setCount(3);
      setCount(4);
    });
  };

  return (
    <section data-name="Example20">
      <RenderTip />
      <h1>count:{count}</h1>
      <h1>count2:{count2}</h1>
      <button className="my-btn" onClick={atIncrement}>
        increment
      </button>
      <button className="my-btn style-fail" onClick={atBatchingUpdateFailSetTimeout}>
        atBatchingUpdateFailSetTimeout
      </button>
      <button className="my-btn style-fail" onClick={atBatchingUpdateFailPromise}>
        atBatchingUpdateFailPromise
      </button>
    </section>
  );
};
export default AutoMaticBatchingExample;
