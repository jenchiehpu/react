import React from 'react';
import style from './Example5.module.scss';

const Example = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section data-name="example05" className={style.root} data-show={show}>
      <h1 className={style.h1} data-show={show}>
        hi emotion
      </h1>
      <button className={style.button} onClick={() => setShow(!show)}>
        Switch
      </button>
    </section>
  );
};
export default Example;
