import React from 'react';
import ChildComponent from './ChildComponent';
import './app.scss';

const Example13 = () => {
  const [count, setCount] = React.useState(0);
  const [date, setDate] = React.useState('');
  const atCallParent = (value) => {
    setDate(value);
  };
  return (
    <section data-name="Example13">
      <h1>ParentComponent</h1>
      <p>
        count:
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>
        date:
        {date}
      </p>
      <ChildComponent count={count} onCallParent={atCallParent} />
    </section>
  );
};

export default Example13;
