import React from 'react';

type Props = {
  render: (name: string) => React.JSX.Element,
};

const MyComponentRender: React.FC<Props> = (props) => {
  const [name, setName] = React.useState('milkmidi');

  const atClick = React.useCallback(() => {
    setName('hi, React');
  }, []);

  return (
    <section data-name="MyComponentRender">
      <h1>name:{name}</h1>
      <button onClick={atClick}>click</button>
      {props.render(name)}
    </section>
  );
};

export default MyComponentRender;
