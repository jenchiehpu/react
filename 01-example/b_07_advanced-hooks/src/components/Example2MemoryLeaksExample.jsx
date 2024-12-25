import { useState, useEffect } from 'react';

const Example1 = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/todos');
      const newData = await response.json();
      console.log(newData);
      setTodo(newData);
    };
    fetchData();
  }, []);
  return <section data-name="example1">{todo && JSON.stringify(todo)}</section>;
};

const Example2 = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      const response = await fetch('/api/todos');
      const newData = await response.json();
      if (isComponentMounted) {
        setTodo(newData);
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);
  return <section data-name="example2">{todo && JSON.stringify(todo)}</section>;
};

const Example3 = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch('/api/todos', {
          signal: abortController.signal,
        });
        const newData = await response.json();
        setTodo(newData);
      } catch (error) {
        console.log(error.name);
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
  return <section data-name="example2">{todo && JSON.stringify(todo)}</section>;
};

const MemoryLeaksExample = () => {
  const [show, setShow] = useState(true);
  return (
    <section data-name="MemoryLeaks">
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        ToggleShow
      </button>
      {show && <Example1 />}
      {show && <Example2 />}
      {show && <Example3 />}
    </section>
  );
};
export default MemoryLeaksExample;
