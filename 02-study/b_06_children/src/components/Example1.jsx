import React from 'react';

type Props = {
  children: (name: string) => React.JSX.Element,
};

const Example1: React.FC<Props> = (props) => {
  const [name, setName] = React.useState('milkmidi');

  const atClick = React.useCallback(() => {
    setName('hi, React');
  }, []);

  console.log(typeof props.children);

  return (
    <section data-name="Example1">
      <h1>name:{name}</h1>
      <button onClick={atClick}>click</button>
      {/* TODO */}
      {props.children(name)}
    </section>
  );
};
export default Example1;
