import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'search':
      return {
        ...state,
        search: action.value,
      };
    case 'category':
      return {
        ...state,
        category: action.value,
        pagination: 1,
      };
    case 'pagination':
      return {
        ...state,
        pagination: action.value,
      };

    default:
      return state;
  }
};

const initialData = {
  isLoading: false,
  search: '',
  pagination: 1,
  category: 'all',
};

const Example5 = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  const doFetch = () => {
    console.log('atDoSearch', state);
  };

  return (
    <section data-name="Example5">
      {state.isLoading && <div>Loading</div>}
      <div>
        <input
          type="text"
          placeholder="search"
          value={state.search}
          onChange={(e) => dispatch({ type: 'search', value: e.target.value })}
        />
        <button onClick={doFetch}>Search</button>
      </div>
      <div>
        <select
          value={state.category}
          onChange={(e) => dispatch({ type: 'category', value: e.target.value })}
        >
          <option value="all">all</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
      </div>
      <div>
        {Array.from(Array(4).keys()).map((idx) => {
          return (
            <button
              key={idx}
              className="btn btn-link"
              onClick={() => dispatch({ type: 'pagination', value: idx })}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Example5;
