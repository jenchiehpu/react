/* eslint-disable import/no-duplicates */
import React, { useState, useCallback } from 'react';
import cat from 'img/cat.png';
import catInline from 'img/cat.png?inline';
import styles from './style.module.scss';

type MyHooksProps = {
  count: number,
  onClick: () => void,
};

const MyHooks: React.FC<MyHooksProps> = (props) => {
  const { count, onClick } = props;
  const [name, setName] = useState('milkmidi');

  const atClick = useCallback(() => {
    setName('hi, React');
    onClick();
  }, [onClick]);

  return (
    <section data-name="MyHooks" className={styles.app}>
      <h1>MyHooks, name:{name}</h1>
      <h2>props.count:{count}</h2>
      <button className="btn btn-primary" onClick={atClick}>
        click
      </button>
      <img className="mw-100" src={cat} alt="" />
      <img className="mw-100" src={catInline} alt="" />
    </section>
  );
};
export default MyHooks;
