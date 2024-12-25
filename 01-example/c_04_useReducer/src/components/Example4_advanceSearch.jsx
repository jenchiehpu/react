import { useState } from 'react';

const Example4advanceSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState(1);
  const [category, setCategory] = useState('all');

  const doFetch = () => {
    console.log('atDoSearch');
    console.log(search, pagination, category);
    // fetch api
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section data-name="Example">
      {isLoading && <div>Loading</div>}
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={doFetch}>Search</button>
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">all</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
      </div>
      <div>
        {Array.from(Array(4).keys()).map((idx) => {
          return (
            <button key={idx} className="btn btn-link" onClick={() => setPagination(idx)}>
              {idx + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Example4advanceSearch;
