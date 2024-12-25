/* eslint-disable import/no-duplicates */
import { useState, useCallback } from 'react';
import img from '../../img/pixel_512.png';
import styles from './style.module.scss';

type Props = {
  count: number;
  onClick: () => void;
};

const MyHooks: React.FC<Props> = (props: Props) => {
  const { count } = props;
  const [name, setName] = useState('milkmidi');

  const atClick = useCallback(() => {
    setName(new Date().toString());
    props.onClick();
    console.log('9527');
  }, [props]);

  return (
    <section className={styles.root}>
      <h1>{name}</h1>
      <h2>{count}</h2>
      <img src={img} alt="" />
      <span className={styles.icon} />
      <button className="btn btn-primary" onClick={atClick}>
        click
      </button>
    </section>
  );
};
export default MyHooks;
