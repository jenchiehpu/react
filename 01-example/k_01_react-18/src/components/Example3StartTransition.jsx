import React, { useState, useTransition } from 'react';
import { css } from '@emotion/css';
import ExpensiveView from './ExpensiveView';

const loadingStyle = css`
  &[data-loading='true'] {
    color: red;
  }
`;

const Example3StartTransition = () => {
  const [value, setValue] = useState(0);
  const [renderValue, setRenderValue] = useState(0);
  const [isUse, setIsUse] = useState(false);

  // TODO
  const [isPending, startTransition] = useTransition();
  const atRangeChange = React.useCallback(
    (e) => {
      setValue(e.target.value);
      if (isUse) {
        // TODO
        startTransition(() => {
          setRenderValue(e.target.value / 1);
        });
      } else {
        setRenderValue(e.target.value / 1);
      }
    },
    [isUse],
  );

  return (
    <section data-name="StartTransitionExample">
      <div className="App-header">
        <label>
          <input
            type="checkbox"
            checked={isUse}
            onChange={(e) => {
              setIsUse(e.target.checked);
            }}
          />
          useTransition
        </label>
        <h3>input:{value}</h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={atRangeChange}
        />
        <div className={loadingStyle} data-loading={isPending}>
          isLoading:{isPending.toString()}
        </div>
        <ExpensiveView value={renderValue} />
      </div>
    </section>
  );
};

export default Example3StartTransition;
