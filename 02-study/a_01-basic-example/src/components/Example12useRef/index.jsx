import React from 'react';

const Example12 = () => {
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const refInput = React.useRef();

  const atShowClick = () => {
    setShow(!show);
    // console.log(refInput.current); // undefined
  };

  // TODO
  /* React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  React.useEffect(() => {
    if (show) {
      console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]); */

  return (
    <section data-name="Example12">
      <section>
        <div>
          <button className="my-btn" onClick={atShowClick}>
            show input
          </button>
        </div>
        {show && <input ref={refInput} />}
        <div>
          <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </section>
    </section>
  );
};

export default Example12;
