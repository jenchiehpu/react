import React from 'react';
import FCComponent from './FCComponent';
import ReactComponentLifeCycle from './ReactComponentLifeCycle';

const Example = () => {
  const [show, setShow] = React.useState(false);
  const atClick = () => {
    setShow(!show);
  };

  return (
    <section data-name="Example7">
      <button className="my-btn d-block" onClick={atClick}>
        show
      </button>
      {show && <FCComponent />}
      {show && <ReactComponentLifeCycle />}
    </section>
  );
};
export default Example;
