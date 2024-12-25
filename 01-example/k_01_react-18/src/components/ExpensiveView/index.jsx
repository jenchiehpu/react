import React from 'react';
import style from './ExpensiveView.module.scss';

type ExpensiveViewProps = {
  value: number,
};

const ExpensiveView: React.FC<ExpensiveViewProps> = (props) => {
  const { value } = props;
  const length = (value / 1) * 20 + 100;
  return (
    <div className={style.root}>
      <h4>SVG Circle count:{length}</h4>
      {Array.from(Array(length).keys()).map((v) => {
        const per = (Math.PI * 2) / length;
        const rootStyle = {
          left: Math.cos(per * v) * 200 + 250 - 50,
          top: Math.sin(per * v) * 120 + 250 - 50,
        };
        return (
          <div className={style.box} key={v} style={rootStyle}>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="25" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ExpensiveView);
