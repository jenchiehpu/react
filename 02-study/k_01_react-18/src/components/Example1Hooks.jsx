import React from 'react';

const Example1Hooks = () => {
  // https://reactjs.org/blog/2022/03/29/react-v18.html#useid
  const id1 = React.useId();
  const id2 = React.useId();

  // https://reactjs.org/blog/2022/03/29/react-v18.html#useinsertioneffect
  React.useInsertionEffect(() => {
    console.log('useInsertionEffect');
  }, []);
  return (
    <section data-name="Example1Hooks">
      <div>
        <input type="checkbox" id={id1} />
        <label htmlFor={id1}>React</label>
      </div>
      <div>
        <input type="checkbox" id={id2} />
        <label htmlFor={id2}>Vue</label>
      </div>
    </section>
  );
};

export default Example1Hooks;
