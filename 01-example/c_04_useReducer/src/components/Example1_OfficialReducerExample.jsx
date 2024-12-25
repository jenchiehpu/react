import React from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// https://reactjs.org/docs/hooks-reference.html#usereducer
const OfficialReducerExample = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <section data-name="OfficialReducerExample">
      Count: {state.count}
      <button className="my-btn" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button className="my-btn" onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </section>
  );
};
export default OfficialReducerExample;
