import { useState, useEffect } from 'react';
import { fetchData } from '../../services/api';

const DisplayData = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData().then((result: string[]) => {
      setList(result);
    });
  }, []);
  return (
    <section data-name="DisplayData">
      {list.length === 0 && <div data-testid="loading">Loading</div>}
      <ul data-testid="ul">
        {list.map((text: string) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
};
export default DisplayData;
