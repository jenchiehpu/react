import React, { useState, useDeferredValue } from 'react';
import ExpensiveView from './ExpensiveView';

const Example2useDeferredValue = () => {
  const [value, setValue] = useState(0);
  // TODO
  const deferredValue = useDeferredValue(value);

  const atRangeChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <section data-name="Example2useDeferredValue">
      <div>
        <h3>
          input:{value}, deferredValue:{deferredValue}
        </h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={atRangeChange}
        />
        <ExpensiveView value={deferredValue} />
      </div>
    </section>
  );
};

export default Example2useDeferredValue;
