import React from 'react';

/**
 * @param {number} value
 * @returns number
 */
const computeExpensiveValue = (value) => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 1000000000; i += 1) {
    r += 1;
  }
  return r;
};

const HooksUseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  console.time();
  /* TODO
  const memoizedValue = React.useMemo(() => {
    const result = computeExpensiveValue(count);
    return result;
  }, [count]);
  // */
  console.timeEnd();

  return (
    <section data-name="Example16useMemo">
      <h1>count: {count}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        setCount
      </button>
      <h1>memoizedValue: {memoizedValue}</h1>
      <h1>count2: {count2}</h1>
      <button className="my-btn" onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
};

export default HooksUseMemo;
