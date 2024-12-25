import { useState, useEffect } from 'react';

export const useFetchTodos = () => {
  const [isLoading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setLists(data);
      });
  }, []);
  return { isLoading, lists };
};
